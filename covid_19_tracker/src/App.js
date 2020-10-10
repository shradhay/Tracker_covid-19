import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem ,Select} from '@material-ui/core'
import InfoBox from "./InfoBox"
import "./Style.css"
import Map from "./Map"
import {Card,CardContent} from "@material-ui/core"
import Table from "./Table"
import   { sortData } from "./utl"
import LineGraph from "./LineGraph"
import 'leaflet/dist/leaflet.css';
import numeral from "numeral"
import corona from "./Images/corona.png"
 

const App =()=>{
    
   const [countries, setCountries] = useState([])
   const [country, setCountry] = useState('worldwide')
   const [countryInfo, setCountryInfo] = useState({})
   const [TableData, setTableData] = useState([])
   const [mapCenter, setMapCenter] = useState({lat: 34.80746,lng: -40.4796 });
   const [mapZoom, setMapZoom] = useState(3)
   const [mapCountries, setMapCountries] = useState([])
   const [casesType, setCasesType] = useState("cases");
  
  useEffect(() => {

   fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=> response.json())
    .then((data)=> {
        setCountryInfo(data);
    });
     
  }, []);
  
  useEffect(() => {
      const getCountriesData = async ()=>{
         fetch ("https://disease.sh/v3/covid-19/countries")
          .then((response) => response.json())
          .then((data)=>{
             const countries = data.map((country)=>(
                 {
                     name:country.country,
                     value:country.countryInfo.iso2,
                 }));
                 let sortedData= sortData(data)
                 setCountries(countries);
                
                 setMapCountries(data);
                 setTableData(sortedData);
                
                
                })
      };
      getCountriesData();
   },[]);
    const onCountryChange =async (event) =>{
        const countryCode = event.target.value;
      

        const url = countryCode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : 
        `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        

        await fetch(url)
        .then(response => response.json())
        .then( data => {
            setCountry(countryCode)
            setCountryInfo(data);
            // setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
            setMapZoom(4);


        })
    }
    return(
        <>
        

        <div className="app">
        <div className="app_left">
        <div className="app_header">
        <img src={corona} alt="corona_img" />
           <h1> <span>COVID-19</span> TRACKER</h1>
            <FormControl className="app_dropdown">
                <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
                >
                    <MenuItem value='worldwide'
                     onChange={onCountryChange}
                    >Worldwide</MenuItem>
                    {countries.map(country=>(
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    )

                    )}
                   
                </Select>
            </FormControl>
            </div>

            <div className="app_stats">
                <InfoBox 
                onClick={(e) => setCasesType("cases")}

                title="Coronavirus Cases"
                isRed
                cases={numeral(countryInfo.todayCases).format("0,0")}
                total={numeral(countryInfo.cases).format("0,0")}
                />

                <InfoBox 
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                cases={numeral(countryInfo.todayRecovered).format("0,0")}
                total={numeral(countryInfo.recovered).format("0,0")}
                />

                <InfoBox title="Deaths"
                title="Deaths"
                isRed
                 onClick={(e) => setCasesType("deaths")}
                cases={numeral(countryInfo.todayDeaths).format("0,0")}
                 total={numeral(countryInfo.deaths).format("0,0")}
                />

            </div>

            <Map 
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
            />

        </div>

        <Card className="app_right">
            <CardContent className="app_right_card">
                <h3> Live cases by country </h3>
                <h3> Worldwide country </h3>
                <Table countries={TableData}/>
                <br></br>
                <h3>Instruction</h3>
                
                <br></br>
                <LineGraph/>
             </CardContent>

         </Card>

       </div>
        </>
        
    )
}
export default  App;