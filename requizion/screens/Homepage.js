import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import header from "../images/REQUIZION.jpg";

const Homepage = () => {
  return (
    <View style={{ alignContent: "center" }}>
      <Image
        style={{ height: 300, width: "100%", resizeMode: "contain" }}
        source={require("../images/REQUIZION.jpg")}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.text.heading}>Welcome to Requizion</Text>
        <Text style={styles.text.body}>
          Browse available quizzes by subject below, or visit 'My Quizzes'
          create & play your own custom quiz!
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Button title={"Browse Quizzes"} onPress={() => handlePress(Browse)} />
        <Button title={"Your Quizzes"} onPress={() => handlePress(UserQuiz)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    heading: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    body: {
      fontSize: 15,
      textAlign: "center",
    },
  },
});

export default Homepage;
