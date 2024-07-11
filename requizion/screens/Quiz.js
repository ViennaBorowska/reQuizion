import { React, useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HomeButton from "../components/HomeButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import biology from "../data/biology.js";
import history from "../data/history.js";
import computerScience from "../data/computersci.js";
import englishLanguage from "../data/englishlang.js";

const Quiz = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { subject } = route.params;

  const setSubject = () => {
    switch (subject) {
      case "biology":
        return biology;
      case "history":
        return history;
      case "computersci":
        return computerScience;
      case "englishlang":
        return englishLanguage;
      default:
        return biology;
    }
  };

  const questionData = setSubject();
  const totalQuestions = questionData.length;

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const progressPercentage = Math.floor((questionIndex / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setScore((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: questionIndex + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: questionIndex + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [questionIndex]);

  useEffect(() => {
    if (questionIndex + 1 > questionData.length) {
      navigation.navigate("Results", {
        answers: answers,
        points: score,
      });
    }
  }, [questionIndex]);

  const currentQuestion = questionData[questionIndex];
  console.log(answerStatus);

  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <HomeButton />
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>Quiz Challenge</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text>Your Progress</Text>
        <Text>
          ({questionIndex}/{totalQuestions}) questions answered
        </Text>
      </View>

      {/* Progress Bar */}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#FFC0CB",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>

      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="check"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {questionIndex + 1 >= questionData.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: score,

                answers: answers,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setQuestionIndex(questionIndex + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
      <View>
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

export default Quiz;
