import { Container } from "native-base";
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from "./ResultDetails";
//import {withnavigation} from "@react-navigation/stack"

export default function ResultList({ title, filterResult, navigation }) {
  console.log("===============================", filterResult);
  return (
    <View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          {title}
        </Text>
        {/* <Text>{filterResult.length}</Text> */}
        <View style={{ height: "100%" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterResult}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("ResultShow")}
                >
                  <ResultDetails
                    name={item.name}
                    rate={item.rating}
                    review={item.review_count}
                    image={item.image_url}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}


//export default withNavigation(ResultList);