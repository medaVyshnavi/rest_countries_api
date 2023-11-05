import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./home.module.css";
import CountryCard from "../components/Card/CountryCard";
import RegionCard from "../components/Card/RegionCard";

const Home = ({ setSelectedCountry, selectedCountry }) => {
  const [countryList, setCountryList] = useState([]);
  const [filterString, setFilterString] = useState("");

  const [filterByRegion, setFilterByRegion] = useState("");
  const [filterRegionList, setFilterRegionList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      await fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => setCountryList(data));
    };
    try {
      fetchCountries();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleFilterByRegion = async (e) => {
    setFilterByRegion(e.target.value);
    let response;
    if (e.target.value === "all") {
      response = await fetch("https://restcountries.com/v2/all");
      const data = response.json();
      setFilterRegionList(data);
    } else {
      response = await fetch(
        `https://restcountries.com/v3.1/region/${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => setFilterRegionList(data));
    }
  };

  return (
    <>
    {console.log(filterByRegion)}
      <div className={classes.searchFilterDiv}>
        <div className={classes.searchBar}>
          <SearchIcon style={{ color: "rgba(128, 128, 128, 0.7)" }} />
          <input
            type="text"
            placeholder="Search for a country.."
            value={filterString}
            onChange={(e) => setFilterString(e.target.value)}
          />
        </div>
        <div className={classes.selectSearchBar}>
          <select
            name="region"
            id="region"
            value={filterByRegion}
            onChange={handleFilterByRegion}
          >
            <option value="" disabled default>
              Filter By Region{" "}
            </option>
            <option value="all">All </option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div style={{marginLeft:'3rem'}}>
        {filterByRegion == "" || filterByRegion === "all"
          ? countryList
              .filter((val) => {
                if (filterString === "") {
                  return val;
                } else if (
                  val.name.includes(filterString) ||
                  val.name.toUpperCase().includes(filterString) ||
                  val.name.toLowerCase().includes(filterString)
                ) {
                  return val;
                }
              })
              .map((country) => {
                return (
                  <CountryCard
                    key={country.name}
                    country={country}
                    setSelectedCountry={setSelectedCountry}
                  />
                );
              })
          : filterRegionList
              .filter((val) => {
                if (filterString === "") {
                  return val;
                } else if (
                  val.name.common.includes(filterString) ||
                  val.name.common.toUpperCase().includes(filterString) ||
                  val.name.common.toLowerCase().includes(filterString)
                ) {
                  return val;
                }
              })
              .map((country) => {
                return (
                  <RegionCard
                    key={country.name.common}
                    country={country}
                    setSelectedCountry={setSelectedCountry}
                  />
                );
              })}
      </div>
    </>
  );
};

export default Home;
