import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Yelp from "../api/Yelp";
import PhotoList from "../Components/PhotoList";

export default function ResultShow({ navigation }) {
  const [result, setResult] = useState();
  //    const id= navigation.getParam('id');
  const id = JSON.parse(localStorage.getItem("id"));

  console.log("id------", result);

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      {/* <Text>{result.name}</Text> */}
      <FlatList
        data={result.photos}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <PhotoList image={item}/>;
        }}
      />
    </View>
  );
}
