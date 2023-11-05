import React, { useEffect, useState, useCallback } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "./countryDetail.module.css";

const CountryDetail = (props) => {
  const [countryDetail, setCountryDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    country();
  }, []);

  const country = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://restcountries.com/v2/name/${props.selectedCountry}?fullText=true`
    )
      .then((res) => res.json())
      .then((data) => setCountryDetail(data[0]));
    setIsLoading(false);
  };

  const handleBackButton = () => {
    props.setSelectedCountry("");
  };

  return (
    <>
      <button className={classes.button} onClick={handleBackButton}>
        <ArrowBackIcon /> Back
      </button>
      {isLoading ? (
        ""
      ) : (
        <div className={classes.countryStyling}>
          <img className={classes.detailImg} src={countryDetail.flag} height="190" width="100%" />
          <div className={classes.dataStyling}>
          <h2 className={classes.title}>{countryDetail.name}</h2>
            <div className={classes.infoStyling}>
              <div>
                
                <h6>
                  <span className={classes.details}>Native Name :</span>{" "}
                  <p>{countryDetail.nativeName}</p>
                </h6>
                <h6>
                  <span className={classes.details}>Population :</span>{" "}
                  <p>{countryDetail.population}</p>
                </h6>
                <h6>
                  <span className={classes.details}>Region :</span>{" "}
                  <p>{countryDetail.region}</p>
                </h6>
                <h6>
                  <span className={classes.details}>Sub Region :</span>{" "}
                  <p>{countryDetail.subregion}</p>
                </h6>
                <h6>
                  <span className={classes.details}>Capital :</span>{" "}
                  <p>{countryDetail.capital}</p>
                </h6>
              </div>
              <div className={classes.extraInfo}>
                <h6>
                  <span className={classes.details}>
                    Top Level Domain :{" "}
                    {countryDetail.topLevelDomain.map((domain) => (
                      <p key={domain}>{domain}</p>
                    ))}
                  </span>
                </h6>
                <h6>
                  <span className={classes.details}>Currencies :</span>{" "}
                  {countryDetail.currencies.map((currency) => (
                    <p key={currency.name}>{currency.name} ,</p>
                  ))}
                </h6>
                <h6>
                  <span className={classes.details}>Languages :</span>{" "}
                  {countryDetail.languages.map((lang) => (
                    <p key={lang.name}>{lang.name} , </p>
                  ))}
                </h6>
              </div>
            </div>
            <div className={classes.borderDiv}>
              <h4>Border Countries : </h4>
              {countryDetail.borders !== undefined ? (
                countryDetail.borders.map((border) => (
                  <button key={border}>{border}</button>
                ))
              ) : (
                <p style={{ color: "red", fontSize: "12px" }}>No borders</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetail;
