import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "reactstrap";
import MapResaults from "../Map";
import { SearchContext } from "../App";

// export default function Search() {
//   const searchContext = useContext(SearchContext);
//   console.log("SerchContext-Serch-", searchContext.query.type);
//   const [results, setResults] = useState();

//   const url = "https://google-maps-search1.p.rapidapi.com/search";

//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Host": "google-maps-search1.p.rapidapi.com",
//       "X-RapidAPI-Key": "2c027e32bdmshb9b7054156db181p103862jsnd0754bde8547"
//     },
//     body: searchContext.query.type
//       ? `{"limit":4,"language":"en","region":"au","queries":["top rated ${searchContext.query.type} ${searchContext.query.suburb} , NSW, AU"],"coordinates":"-33.8688,151.2093"}`
//       : '{"limit":3,"language":"en","region":"au","queries":["top rated speech therapist turramurra, NSW, AU"],"coordinates":"-33.8688,151.2093"}'
//   };
//   console.log("SerchContext-body-", options.body);

//   useEffect(() => {
//     async function makeAPICall() {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       setResults(data.response.places);
//       console.log("App-data", results);
//     }
//     makeAPICall();
//   }, [!results]);
//   if (!results) {
//     return <Spinner />;
//   }
//   const therapists = results;
//   return <MapResaults properties={results} />;
// }

export default function Search() {
  const searchContext = useContext(SearchContext);
  console.log("SerchContext-Serch-", searchContext.query.type);
  const [results, setResults] = useState();

  const url =
    "https://google-maps-data1.p.rapidapi.com/gmaps?keyword=speech%20therapy&maxResults=20&latitude=-33.8688&longitude=151.2093&zoom=15";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "175dd9f6cdmsh7cd64faabeec5e7p1973a6jsndfa039583a97",
      "X-RapidAPI-Host": "google-maps-data1.p.rapidapi.com"
    }
  };
  console.log("SerchContext-body-", options.body);

  useEffect(() => {
    async function makeAPICall() {
      const response = await fetch(url, options);
      const data = await response.json();
      setResults(data);
      console.log("App-data", results);
    }
    makeAPICall();
  }, [!results]);
  if (!results) {
    return <Spinner />;
  }
  const therapists = results;
  return <MapResaults properties={results} />;
}
