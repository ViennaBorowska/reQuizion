import React from "react";
import { Text, StyleSheet, View, Pressable, SafeAreaView } from "react-native";
import HomeButton from "../components/HomeButton";
import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <HomeButton />
        </Pressable>
        <Text> QUIZ </Text>

        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={styles.button.submit}
            title={"Submit"}
            onPress={() => navigation.navigate("Browse")}
          >
            <Text>Submit</Text>
          </Pressable>
          <Pressable
            style={styles.button.quit}
            title={"Quit"}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Quit</Text>
          </Pressable>
          <Pressable
            style={styles.button.restart}
            title={"Restart"}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Restart</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  button: {
    submit: {
      alignItems: "center",
      justifyContent: "center",
      padding: 14,
      width: 120,
      height: 100,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 30,
      backgroundColor: "green",
    },
    quit: {
      alignItems: "center",
      justifyContent: "center",
      padding: 14,
      width: 120,
      height: 100,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 30,
      backgroundColor: "red",
    },
    restart: {
      alignItems: "center",
      justifyContent: "center",
      padding: 14,
      width: 120,
      height: 100,
      borderRadius: 25,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 30,
      backgroundColor: "orange",
    },
  },
});
