import React, { Component } from "react";
import { Pressable, Button, Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";

const Homepage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignContent: "center" }}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <HomeButton />
      </Pressable>
      <Header />
      <View style={{ padding: 10 }}>
        <Text style={styles.text.heading}>Choose Your Quiz</Text>
        <Text style={styles.text.body}>
          Browse available quizzes by subject below, or visit 'My Quizzes'
          create & play your own custom quiz!
        </Text>
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
