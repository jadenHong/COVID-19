import React from 'react';

export const Tooltip = ({ seriesName, countryName, value, unit, flag }) => (
    <div>
        <div>{`Series Name: ${seriesName}`}</div>
        <div >
            <img alt={countryName} src={flag} style={{ width: '30px', height: '20px' }} />
            {` ${countryName}`}
        </div>
        <div>{`Value: ${Number(
            value
        ).toLocaleString()} ${unit.toLowerCase()}`}</div>
    </div>
);