import React, { useState, useEffect } from "react";
import StartScreen from "./StartScreen";
import QuestionsScreen from "./QuestionsScreen";
import ResultScreen from "./ResultScreen";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
        setAnswers(new Array(data.results.length).fill(null));
      });
  }, []);

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Quizzopia</a>
        </div>
      </nav>
      {!start ? (
        <StartScreen onStart={() => setStart(true)} />
      ) : !submitted ? (
        <QuestionsScreen
          questions={questions}
          answers={answers}
          onAnswer={handleAnswer}
          onSubmit={handleSubmit}
        />
      ) : (
        <ResultScreen questions={questions} answers={answers} />
      )}
    </div>
  );
}
