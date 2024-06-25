import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <View style={{ alignContent: "center" }}>
      <Header />
      <View style={{ padding: 10 }}>
        <Text style={styles.text.heading}>It's study time!</Text>
        <Text style={styles.text.body}>
          Browse quizzes by subject below, or visit 'My Quizzes' to create &
          play your own custom quiz!
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
