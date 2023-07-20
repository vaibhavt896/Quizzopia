import React from "react";
import { encode } from 'html-entities';
import Question from "./Question";

export default function QuestionsScreen({ questions, answers, onAnswer, onSubmit }) {
  const handleAnswer = (index, answer) => {
    onAnswer(index, answer);
  };

  return (
    <div className = "questions-screen">
      <h1>Quiz Questions</h1>
      {questions.map((question, index) => (
       <div className ="questions"> <Question
          key={index}
          question={question}
          answer={answers[index]}
          onAnswer={(answer) => handleAnswer(index, answer)}
        />
        </div>
      ))}
      <button type="button" className="submit btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
