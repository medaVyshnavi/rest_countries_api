import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import classes from './countryCard.module.css'

const CountryCard = ({ country , setSelectedCountry }) => {

  const selectedCardHandler = (event,data) => {
    setSelectedCountry(data);
  }
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.gridStyling}>
      <CardActionArea onClick={(event)=>selectedCardHandler(event,country.name)}>
        <CardMedia
          component="img"
          height="160"
          image={country.flag}
          alt="flag"
        />
        <CardContent style={{padding:'24px' , height:'200px'}}>
          <Typography gutterBottom variant="h5" component="div">
            <h5>{country.name}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h6><span className={classes.details}>Population :</span> {country.population}</h6>
            <h6><span className={classes.details}>Region :</span> {country.region}</h6>
            <h6><span className={classes.details}>Capital :</span> {country.capital}</h6>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
