import { useState, useEffect } from "react";
import Card from "./Card";
import { CardGroup } from "reactstrap";
import Spinner from "../Spinner";

const url = "https://google-maps-search1.p.rapidapi.com/search";

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Host": "google-maps-search1.p.rapidapi.com",
    "X-RapidAPI-Key": "2c027e32bdmshb9b7054156db181p103862jsnd0754bde8547"
  },
  body:
    '{"limit":3,"language":"en","region":"au","queries":["top rated speech therapist turramurra, NSW, AU"],"coordinates":"37.381315,-122.046148"}'
};

const Cards = () => {
  const [results, setResults] = useState();
  useEffect(() => {
    async function makeAPICall() {
      const response = await fetch(url, options);
      const data = await response.json();
      setResults(data.response.places);
      console.log("App-data", results);
    }
    makeAPICall();
  }, [!results]);

  if (!results) {
    return <Spinner />;
  }
  const Cards = results.map((card, index) => {
    return <Card {...card} key={index} />;
  });
  return <CardGroup className="cards">{Cards}</CardGroup>;
};
export default Cards;
