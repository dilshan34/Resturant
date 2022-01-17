import React from "react";
import { View, Text, Image } from "react-native";

export default function ResultDetails({ name, rate, review, image }) {
  return (
    <View
      style={{
        width: 250,
        marginTop: 5,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 100,
          }}
        />
      </View>
      <Text style={{ marginLeft: 25, fontWeight: "bold", marginTop: 15 }}>
        {name}
      </Text>
      <View style={{ flexDirection: "row", marginLeft: 25 }}>
        <Text>{rate} Stars ,</Text>
        <Text>{review} Reviews</Text>
      </View>
    </View>
  );
}
