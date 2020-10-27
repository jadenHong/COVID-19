
import React, { useEffect, useState } from "react";
import { renderToString } from 'react-dom/server';
import Highcharts from "highcharts";
import { maps } from 'highcharts/highmaps';
import HighchartsReact from "highcharts-react-official";
import HC_map from "highcharts/modules/map";
import { highmap } from './world';
import { useCovidData } from './useCovidData';
import { Tooltip } from './Tooltip';

// highchartsMap(Highcharts);
HC_map(Highcharts);
const TestPage = ({ casesType }) => {
    const [valueType, setValueType] = useState({
        type: casesType,
        maxColor: '#004299',
    });
    // 일반 popularity 를 쓰고 싶으면 이걸 써
    const MAP_NAME = "custom/world";
    const getMapData = (mapName) => maps[mapName];
    const { data, error } = useCovidData(casesType);
    const highChartOption = {
        chart: {
            map: "custom/world",
        },

        title: {
            text: "Zoom in on country by double click",
        },

        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
        },

        colorAxis: {
            min: 1,
            max: data.length > 0 ? data.sort((a, b) => b.value - a.value)[0].value : 10000000,
            type: "logarithmic",
            minColor: '#efecf3',
            maxColor: valueType.maxColor,
        },
        series: [
            {
                mapData: highmap(),
                data,
                joinBy: ["iso-a3", "code3"],
                name: "Population density",
                states: {
                    hover: {
                        color: "#f8eb72",
                    },
                },
                tooltip: {
                    valueSuffix: valueType.type.toLowerCase(),
                },
            },
        ],
        tooltip: {
            useHTML: true,
            formatter: function () {
                return renderToString(<Tooltip
                    seriesName={this.series.name}
                    countryName={this.point.name}
                    value={this.point.value}
                    unit={valueType.type}
                    flag={this.point.flag}
                />)
            }
        },
    };

    useEffect(() => {
        switch (casesType) {
            case 'cases':
                return setValueType({
                    type: 'cases',
                    maxColor: '#003eb1',
                });
            case 'recovered':
                return setValueType({
                    type: 'recovered',
                    maxColor: '#039634',
                });
            case 'deaths':
                return setValueType({
                    type: 'deaths',
                    maxColor: '#990041',
                });
            default:
                break;
        }
    }, [casesType])


    return (
        <>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType="mapChart"
                    options={highChartOption}
                />
            </div>
        </>
    );

}


export default TestPage;








