import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import HomeButton from "../components/HomeButton";

const CreateQuiz = ({ navigation, route }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleAddQuestion = () => {
    if (
      !currentQuestion ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !correctOption
    ) {
      Alert.alert("All fields are required.");
      return;
    }

    const newQuestion = {
      question: currentQuestion,
      options: [option1, option2, option3, option4],
      answer: correctOption,
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectOption("");
  };

  const handleSaveQuiz = () => {
    if (!quizTitle || questions.length === 0) {
      Alert.alert("Quiz title and at least one question are required.");
      return;
    }

    const newQuiz = {
      title: quizTitle,
      questions: questions,
    };

    route.params.addQuiz(newQuiz);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <HomeButton />
      </Pressable>
      <Text style={styles.label}>Quiz Title:</Text>
      <TextInput
        style={styles.input}
        value={quizTitle}
        onChangeText={setQuizTitle}
      />
      <Text style={styles.label}>Question:</Text>
      <TextInput
        style={styles.input}
        value={currentQuestion}
        onChangeText={setCurrentQuestion}
      />
      <Text style={styles.label}>Option 1:</Text>
      <TextInput
        style={styles.input}
        value={option1}
        onChangeText={setOption1}
      />
      <Text style={styles.label}>Option 2:</Text>
      <TextInput
        style={styles.input}
        value={option2}
        onChangeText={setOption2}
      />
      <Text style={styles.label}>Option 3:</Text>
      <TextInput
        style={styles.input}
        value={option3}
        onChangeText={setOption3}
      />
      <Text style={styles.label}>Option 4:</Text>
      <TextInput
        style={styles.input}
        value={option4}
        onChangeText={setOption4}
      />
      <Text style={styles.label}>Correct Option:</Text>
      <TextInput
        style={styles.input}
        value={correctOption}
        onChangeText={setCorrectOption}
      />
      <Button title="Add Question" onPress={handleAddQuestion} />

      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.options.map((option, idx) => (
              <Text key={idx} style={styles.optionText}>
                {option}
              </Text>
            ))}
            <Text style={styles.correctOptionText}>Correct: {item.answer}</Text>
          </View>
        )}
      />

      <Button title="Save Quiz" onPress={handleSaveQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
  questionContainer: {
    marginTop: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionText: {
    fontSize: 14,
  },
  correctOptionText: {
    fontSize: 14,
    color: "green",
  },
});

export default CreateQuiz;
