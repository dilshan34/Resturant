import { Container } from "native-base";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import Yelp from "../api/Yelp";
import useResult from "../Hooks/useResult";
import ResultList from "../Components/ResultList";
import { AsyncStorage } from "react-native";

export default function Home({ navigation }) {
  const [term, setTerm] = useState("");
  const [result, error, searchApi] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((results) => {
      return results.price === price;
    });
  };

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
        {/* <Text>{result.length}</Text> */}
        <ResultList
          navigation={navigation}
          title="Cost Effective"
          filterResult={filterResultByPrice("$")}
        />
      </View>
      <View style={{ flex: 3 }}>
        <ResultList
          navigation={navigation}
          title="Bit Prizer"
          filterResult={filterResultByPrice("$$")}
        />
      </View>
      <View style={{ flex: 3, backgroundColor: "white" }}>
        <ResultList
          navigation={navigation}
          title="Big Spender"
          filterResult={filterResultByPrice("$$$")}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({});
