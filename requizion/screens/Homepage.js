import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import header from "../images/REQUIZION.jpg";

const Homepage = () => {
  return (
    <View>
      <Image
        style={{ height: 300, width: "100%", resizeMode: "contain" }}
        source={require("../images/REQUIZION.jpg")}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Welcome to the Quiz App
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          This is a Quiz App
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Homepage;
