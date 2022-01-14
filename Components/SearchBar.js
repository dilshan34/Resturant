import { Container, Input, Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchBar({ term, onTermChange,onSubmit }) {
  return (
    <Container>
      <View
        style={{
          height: 35,
          borderRadius: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon name="search" />
        <Input placeholder="Search" value={term} onChangeText={onTermChange} onEndEditing={onSubmit}/>
      </View>
    </Container>
  );
}
