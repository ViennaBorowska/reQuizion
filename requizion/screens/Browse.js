import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";

const Browse = () => {
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
          Browse available quizzes by subject below, or visit 'My Quizzes' from
          the homepage to create & play your own custom quiz!
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
          title={"English Language"}
          onPress={() =>
            navigation.navigate("Quiz", {
              subject: "englishlang",
            })
          }
        >
          <Text>English Language</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          title={"History"}
          onPress={() =>
            navigation.navigate("Quiz", {
              subject: "history",
            })
          }
        >
          <Text>History</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          title={"Biology"}
          onPress={() =>
            navigation.navigate("Quiz", {
              subject: "biology",
            })
          }
        >
          <Text>Biology</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          title={"Computer Science"}
          onPress={() =>
            navigation.navigate("Quiz", {
              subject: "computersci",
            })
          }
        >
          <Text>Computer Science</Text>
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
    height: 100,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
  },
});

export default Browse;
