import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import numeral from 'numeral';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const columns = [
    { id: 'Country', label: 'Country', align: 'center', minWidth: 50 },
    {
        id: 'Cases',
        label: 'Cases',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Recovered',
        label: 'Recovered',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Deaths',
        label: 'Deaths',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Tests',
        label: 'Tests',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'TodayCases',
        label: 'TodayCases',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'TodayDeaths',
        label: 'TodayDeaths',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'TodayRecovered',
        label: 'TodayRecovered',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 900,
    },
});

const TablePage = ({ countries }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.map(({ country, cases, recovered, deaths, tests, todayCases, todayDeaths, todayRecovered }) => (
                            <StyledTableRow key={country.updated}>
                                <StyledTableCell align="center">{country}</StyledTableCell>
                                <StyledTableCell align="right"><strong>{numeral(cases).format("0,0")}</strong></StyledTableCell>
                                <StyledTableCell align="right">{numeral(recovered).format("0,0")}</StyledTableCell>
                                <StyledTableCell align="right">{numeral(deaths).format("0,0")}</StyledTableCell>
                                <StyledTableCell align="right">{numeral(tests).format("0,0")}</StyledTableCell>
                                <StyledTableCell align="right">{numeral(todayCases).format("0,0")}</StyledTableCell>
                                <StyledTableCell align="right">{numeral(todayDeaths).format("0,0")}</StyledTableCell>
                                <StyledTableCell align="right">{numeral(todayRecovered).format("0,0")}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default TablePage;





























// import React from 'react'
// import './Table.css';
// import numeral from 'numeral';
// import Table from 'react-bootstrap/Table'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const TablePage = ({ countries }) => {
//     console.log(countries);

//     return (

//         <Table className="table" striped bordered hover variant="dark" responsive>
//             <thead>
//                 <tr>
//                     <th>Country</th>
//                     <th>Cases</th>
//                     <th>Recovered</th>
//                     <th>Deaths</th>
//                     <th>Tests</th>
//                     <th>TodayCases</th>
//                     <th>TodayDeaths</th>
//                     <th>TodayRecovered</th>
//                 </tr>
//             </thead>
//             <tbody >
//                 {countries.map(({ country, cases, recovered, deaths, tests, todayCases, todayDeaths, todayRecovered }) => (
//                     <tr key={country.updated}>
//                         <td>{country}</td>
//                         <td><strong>{numeral(cases).format("0,0")}</strong></td>
//                         <td>{numeral(recovered).format("0,0")}</td>
//                         <td>{numeral(deaths).format("0,0")}</td>
//                         <td>{numeral(tests).format("0,0")}</td>
//                         <td>{numeral(todayCases).format("0,0")}</td>
//                         <td>{numeral(todayDeaths).format("0,0")}</td>
//                         <td>{numeral(todayRecovered).format("0,0")}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Table>


//     )
// }

// export default TablePage;