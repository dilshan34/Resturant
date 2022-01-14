import { Container } from "native-base";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import Yelp from "../api/Yelp";
import useResult from "../Hooks/useResult";
import ResultList from "../Components/ResultList";

export default function Home() {
  const [term, setTerm] = useState("");
  const [result, error, searchApi] = useResult();

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onSubmit={() => searchApi(term)}
        />
        {/* <Text>{error}</Text> */}
      </View>
      <View style={{ flex: 3, backgroundColor: "white" }}>
        <Text>{result.length}</Text>
        <ResultList title="Cost Effective"/>
      </View>
      <View style={{ flex: 3, backgroundColor: "red" }}>
        <ResultList title="Bit Prizer"/>
      </View>
      <View style={{ flex: 3, backgroundColor: "white" }}>
        <ResultList title="Big Spender"/>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({});
