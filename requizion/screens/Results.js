import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Results = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Your Results</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Questions Answered</Text>
        <Text>(5/5)</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 220,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Score Card
        </Text>
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          style={{
            backgroundColor: "green",
            padding: 8,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("Browse")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default Results;

const styles = StyleSheet.create({});
