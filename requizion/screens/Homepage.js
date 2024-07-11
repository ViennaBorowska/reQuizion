import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
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
        <Text style={styles.text.heading}>It's study time!</Text>
        <Text style={styles.text.body}>
          Browse quizzes by subject below, or visit 'My Quizzes' to create &
          play your own custom quiz!
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Pressable
          style={styles.button}
          title={"Browse Quizzes"}
          onPress={() => navigation.navigate("Browse")}
        >
          <Text>Browse Quizzes</Text>
        </Pressable>
        {/* <Pressable
          style={styles.button}
          title={"Your Quizzes"}
          onPress={() => handlePress(UserQuiz)}
        >
          <Text>My Quizzes</Text>
        </Pressable> */}
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5ce1e6",
    padding: 14,
    width: 120,
    height: 100,
    borderRadius: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
});

export default Homepage;
