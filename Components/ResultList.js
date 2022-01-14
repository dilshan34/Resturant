import { Container } from "native-base";
import React from "react";
import { View, Text } from "react-native";

export default function ResultList({title}) {
  return (
    <View>
      <View style={{ backgroundColor: "yellow" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          {title}
        </Text>
        <View>
            
        </View>
      </View>
    </View>
  );
}
