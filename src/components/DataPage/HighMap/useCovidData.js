import React, { useEffect, useState } from 'react';

const COVID_API = 'https://disease.sh/v3/covid-19/countries';

export const VALUE_TYPE = {
    TOTAL: 'cases',
    RECOVERED: 'recovered',
    DEATHS: 'deaths',
};
export const useCovidData = (valueType) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const convertCountryData = apiCountryData => {
            const { countryInfo, country, cases, recovered, deaths } = apiCountryData;
            const getValue = () => {
                switch (valueType) {
                    case VALUE_TYPE.RECOVERED: return recovered;
                    case VALUE_TYPE.DEATHS: return deaths;
                    case VALUE_TYPE.TOTAL:
                    default:
                        return cases;
                }
            }
            const { iso2, iso3, flag } = countryInfo;
            return {
                flag,
                code3: iso3,
                name: country,
                value: getValue(), // TBC
                code: iso2,
            };
        }

        const constructCountryData = data => {
            const results = [];
            for (const countryData of data) {
                let shouldInclude = true;
                const convertedData = convertCountryData(countryData);
                for (const value of Object.values(convertedData)) {
                    if (!value) {
                        shouldInclude = false;
                        break;
                    }
                }
                if (shouldInclude) results.push(convertedData);
            }
            return results;
        }

        const getData = async () => {
            try {
                const res = await fetch(COVID_API);
                const data = await res.json();
                const convertedData = constructCountryData(data);
                setData(convertedData);
            } catch (err) {
                setError(err);
            }
        }
        getData();
    }, [valueType]);

    return { data, error };
}