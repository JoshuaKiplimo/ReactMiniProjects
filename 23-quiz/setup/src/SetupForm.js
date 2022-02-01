import React from "react";
import { useGlobalContext } from "./context";
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
const SetupForm = () => {
  const { questions, index, handleNext, handleAnswers, correctAnswers } =
    useGlobalContext();
  if (questions.length == 0) {
    return <h1>loading</h1>;
  }
  const { question, correct_answer, choices } = questions[index];

  return (
    <section className="quiz">
      <p className="correct-answers"> {`Correct Answers: ${correctAnswers}`}</p>
      <article className="container">
        <h2>{question}</h2>
        <div className="btn-container">
          {shuffleArray(choices).map((choice) => {
            return (
              <button
                className="answer-btn"
                onClick={(e) => handleAnswers(e, correct_answer)}
              >
                {choice}
              </button>
            );
          })}
        </div>
      </article>
      <button className="next-question" onClick={handleNext}>
        Next Question
      </button>
    </section>
  );
};

export default SetupForm;
