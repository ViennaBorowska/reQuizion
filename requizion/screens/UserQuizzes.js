import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";

const UserQuizzes = () => {
  const navigation = useNavigation();
  return (
    <View style={{ alignContent: "center" }}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <HomeButton />
      </Pressable>
      <Header />
      <View style={{ padding: 10 }}>
        <Text style={styles.text.heading}>Build Your Quiz</Text>
        <Text style={styles.text.body}>
          Take quizzes you have built yourself, or click the button below to
          build a new one!
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Pressable
          style={styles.button}
          title={"Create A Quiz"}
          onPress={() => navigation.navigate("CreateQuiz")}
        >
          <Text style={styles.text.heading}>Create New Quiz</Text>
        </Pressable>
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
    height: 150,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
  },
});

export default UserQuizzes;
