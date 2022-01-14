import { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 25,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
       console.log(result.length);
    } catch (e) {
      setError("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [result, error, searchApi];
};
