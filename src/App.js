
import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import NewsPage from './components/NewsPage/NewsPage';
import DataPage from './components/DataPage/DataPage';


function App() {

  return (
    <div className="app__page">
      {/* Navbar */}
      <Navbar />
      {/* FirstPage */}
      <HomePage />
      {/* DataPage */}
      <DataPage />

      {/* NewsPage */}
      <NewsPage />
      {/* ContactPage */}
      <ContactPage />

    </div>
  );
}

export default App;












































// import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import InfoBox from './InfoBox';
// import Map from './Map';
// import 'leaflet/dist/leaflet.css';
// import TablePage from './TablePage';
// import LineGraph from './LineGraph';
// import { sortData, prettyPrintStat } from './Util';
// import Navbar from './components/NavBar/NavBar';
// import HomePage from './components/HomePage/HomePage';
// import Test from './Test';
// import ContactPage from './components/ContactPage/ContactPage';
// import NewsPage from './components/NewsPage/NewsPage';


// function App() {
//   const [countries, setCountries] = useState([]);
//   const [country, setCountry] = useState('worldwide');
//   const [countryInfo, setCountryInfo] = useState({});
//   const [tableData, setTableData] = useState([]);
//   const [mapCenter, setMapCenter] = useState({
//     lat: 34.80746, lng: -40.4796
//   });
//   const [mapZoom, setMapZoom] = useState(3);
//   const [mapCountries, setMapCountries] = useState([]);
//   const [casesType, setCasesType] = useState('cases');

//   // 코로나 바이러스의 전체 데이터를 뽑아서 처음 랜더링시에 뽑아서 보여준다.
//   useEffect(() => {
//     fetch('https://disease.sh/v3/covid-19/all')
//       .then(response => response.json())
//       .then(data => {
//         setCountryInfo(data);
//       })
//   }, [])

//   // 코로나 바이러스가 창궐한 국가들을 뽑는 useEffect
//   useEffect(() => {
//     const getCountryData = async () => {
//       await fetch('https://disease.sh/v3/covid-19/countries')
//         .then((response) => response.json())
//         .then((data) => {
//           const countries = data.map((country) => (
//             {
//               name: country.country, // United States, Canada
//               value: country.countryInfo.iso2 // USA, CA
//             }
//           ));

//           // Util.js 에 잇는 sortData의 parameter로 data 를 보내서 data를 sort 한다음 return 값을 sortedData로 넣는다.
//           const sortedData = sortData(data);

//           setTableData(sortedData);
//           setMapCountries(data);
//           setCountries(countries);
//         })
//     }
//     getCountryData();
//   }, []);

//   const onCountryChange = async (event) => {
//     const countryCode = event.target.value;
//     setCountry(countryCode);

//     const url =
//       countryCode === 'worldwide'
//         ? 'https://disease.sh/v3/covid-19/all'
//         : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

//     await fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setCountry(countryCode);
//         setCountryInfo(data);
//         console.log(data.countryInfo);
//         if (data.countryInfo !== undefined) {
//           setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
//         }
//         setMapZoom(4);
//       })

//   }
//   console.log('country info >>>>>', countryInfo);
//   return (
//     <div className="app__page">
//       {/* Navbar */}
//       <Navbar />
//       {/* FirstPage */}
//       <HomePage />
//       <div className="app">
//         <div className="app__left">
//           <div className="app__header">
//             <h1>DATA & STATISTICS</h1>
//             <FormControl className="app__dropdown">
//               <Select variant="outlined" value={country} onChange={onCountryChange}>
//                 <MenuItem value="worldwide">Worldwide</MenuItem>
//                 {
//                   countries.map((country, index) => (
//                     <MenuItem key={index} value={country.value}>{country.name}</MenuItem>
//                   ))
//                 }
//               </Select>
//             </FormControl>
//           </div>
//           <div className="app__stats">
//             <InfoBox
//               isRed
//               active={casesType === 'cases'}
//               onClick={(e) => setCasesType('cases')}
//               title="Coronavirus Cases"
//               cases={prettyPrintStat(countryInfo.todayCases)}
//               total={countryInfo.cases}
//             />
//             <InfoBox
//               active={casesType === 'recovered'}
//               onClick={(e) => setCasesType('recovered')}
//               title="Recovered"
//               cases={prettyPrintStat(countryInfo.todayRecovered)}
//               total={countryInfo.recovered}
//             />
//             <InfoBox
//               isOrange
//               active={casesType === 'deaths'}
//               onClick={(e) => setCasesType('deaths')}
//               title="Deaths"
//               cases={prettyPrintStat(countryInfo.todayDeaths)}
//               total={countryInfo.deaths}
//             />
//           </div>
//           <Map
//             casesType={casesType}
//             countries={mapCountries}
//             center={mapCenter}
//             zoom={mapZoom} />
//           <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
//           <LineGraph className="app__graph" casesType={casesType} />
//         </div>
//         {/* 그래프 부분 */}
//         <Card className="app__right">
//           <CardContent>
//             <h3>Live Cases by Country</h3>
//             {/* <Test countries={tableData} /> */}
//             <TablePage countries={tableData} />

//           </CardContent>
//         </Card>
//       </div>

//       {/* NewsPage */}
//       <NewsPage />
//       {/* ContactPage */}
//       <ContactPage />
//     </div>
//   );
// }

// export default App;