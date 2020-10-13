import React, { useState, useEffect } from 'react'

// npm install --save react-chartjs-2 chart.js 설치해서 사용
import { Line } from 'react-chartjs-2';
// npm install numeral 로 설치
import numeral from 'numeral';


const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    format: 'MM/DD/YY',
                    tooltipFormat: 'll',
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format('0a');
                    },
                },
            },
        ],
    },
}

// casesType 을 두번째 parameter로 주었다 여기서 = 'cases'로 주었기 때문에 이 뜻은 두번째 인자가 들어오면 casesType으로 사용하고 들어오지않으면 default로 'cases'를 사용하라는 뜻이다.
const buildChartData = (data, casesType = 'cases') => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
}

//인자로 casesType 이 들어오면 그걸 쓰고 아니면 default로 'cases' 를 사용해라 
const LineGraph = ({ casesType = 'cases', ...props }) => {
    const [data, setData] = useState({});





    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let chartData = buildChartData(data, casesType);
                    setData(chartData);
                });
        }
        fetchData();
    }, [casesType]);


    return (
        <div className={props.className}>
            {/* data? : data가 존재할때 .length 를 해서 그게 0보다 크냐 */}
            {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5)",
                                borderColor: '#CC1034',
                                data: data
                            }
                        ],
                    }}
                    options={options}
                />
            )}

        </div>
    )
}

export default LineGraph
