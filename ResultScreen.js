import React from "react";

export default function ResultScreen({ questions, answers }) {
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correct_answer === answers[index]) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  return (
    <div>
      <h1>Your Score: {score}</h1>
      <p>Percentage: {percentage.toFixed(2)}%</p>
      <h2>Selected Answers:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question}
            <ul>
              <li>Correct Answer: {question.correct_answer}</li>
              <li>Your Answer: {answers[index]}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
