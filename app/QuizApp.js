import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const questions = [
  { question: "Qual dessas qualidades mais combina com você?", options: [
    { text: "Coragem", house: "grifinoria" },
    { text: "Ambição", house: "sonserina" },
    { text: "Lealdade", house: "lufa-lufa" },
    { text: "Inteligência", house: "corvinal" }
  ]},
  { question: "O que você prefere fazer no tempo livre?", options: [
    { text: "Explorar e me aventurar", house: "grifinoria" },
    { text: "Planejar meu futuro", house: "sonserina" },
    { text: "Ajudar amigos", house: "lufa-lufa" },
    { text: "Ler um livro", house: "corvinal" }
  ]},
  { question: "Se um amigo estiver em perigo, o que você faz?", options: [
    { text: "Ajudo sem pensar duas vezes", house: "grifinoria" },
    { text: "Avalio a situação antes de agir", house: "sonserina" },
    { text: "Faço o que puder para ajudar", house: "lufa-lufa" },
    { text: "Procuro a solução mais inteligente", house: "corvinal" }
  ]},
  { question: "Qual dessas cores você mais gosta?", options: [
    { text: "Vermelho", house: "grifinoria" },
    { text: "Verde", house: "sonserina" },
    { text: "Amarelo", house: "lufa-lufa" },
    { text: "Azul", house: "corvinal" }
  ]},
  { question: "Como você lida com desafios?", options: [
    { text: "Enfrento de cabeça erguida", house: "grifinoria" },
    { text: "Uso estratégias para vencer", house: "sonserina" },
    { text: "Peço ajuda se necessário", house: "lufa-lufa" },
    { text: "Penso bem antes de agir", house: "corvinal" }
  ]},
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ grifinoria: 0, sonserina: 0, lufa_lufa: 0, corvinal: 0 });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (house) => {
    setScores((prevScores) => ({ ...prevScores, [house]: prevScores[house] + 1 }));
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const calculateResults = () => {
    const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0);
    const percentages = Object.fromEntries(
      Object.entries(scores).map(([house, points]) => [house, ((points / totalPoints) * 100).toFixed(1)])
    );
    const bestHouse = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    return { percentages, bestHouse };
  };

  if (finished) {
    const { percentages, bestHouse } = calculateResults();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sua casa é: {bestHouse.toUpperCase()}</Text>
        {Object.entries(percentages).map(([house, percent]) => (
          <Text key={house}>{house.toUpperCase()}: {percent}%</Text>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{questions[currentQuestion].question}</Text>
      <FlatList
        data={questions[currentQuestion].options}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(item.house)}>
            <Text style={styles.buttonText}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  button: { backgroundColor: "#4B0082", padding: 10, margin: 10, borderRadius: 5 },
  buttonText: { color: "white", fontSize: 16, textAlign: "center" },
});

export default QuizApp;
