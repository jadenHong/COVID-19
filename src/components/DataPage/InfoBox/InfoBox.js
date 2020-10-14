import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './InfoBox.css';
import numeral from 'numeral';

const InfoBox = ({ title, cases, isRed, isOrange, active, total, ...props }) => {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isOrange && 'infoBox--orange'}`}>
            <CardContent className="infoBox__content">
                <Typography className="infoBox__title">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && !isOrange && 'infoBox__cases--green'}`}>{cases}</h2>
                <Typography className="infoBox__total">
                    {numeral(total).format('0,0')} Total
            </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
