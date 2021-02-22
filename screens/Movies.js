import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Text>Movies</Text>
    <Button onPress={() => navigation.navigate("Detail")} title="Movie" />
  </View>
);
