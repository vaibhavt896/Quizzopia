import React from "react";

export default function Question({ question, answer, onAnswer }) {
  const { question: questionText, incorrect_answers, correct_answer } = question;

  return (
    <div className="Question">
      <h1>{questionText}</h1>
      {incorrect_answers.map((ans, index) => (
        <button
          key={index}
          className={`Answers btn btn-outline-primary ${answer === ans ? "selected" : ""}`}
          onClick={() => onAnswer(ans)}
        >
          {ans}
        </button>
      ))}
      <button
        className={`Answers btn btn-outline-primary ${answer === correct_answer ? "selected" : ""}`}
        onClick={() => onAnswer(correct_answer)}
      >
        {correct_answer}
      </button>
    </div>
  );
}
