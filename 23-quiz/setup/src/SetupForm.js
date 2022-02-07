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
  const {
    questions,
    index,
    handleNext,
    handleAnswers,
    correctAnswers,
    isEnd,
    setStart,
    replayGame,
  } = useGlobalContext();
  if (questions.length == 0) {
    return <h1>loading</h1>;
  }

  const questionNumber = questions.length;

  const { question, correct_answer, choices } = questions[index];

  return (
    <>
      <div className={isEnd ? `modal-container isOpen` : `modal-container`}>
        <div className="modal-content">
          <h2>Congrats!</h2>
          <p>
            {`You answered ${Math.round(
              (correctAnswers / questionNumber) * 100
            )}% of questions
            correctly`}
          </p>
          <button className="close-btn" onClick={replayGame}>
            play again
          </button>
        </div>
      </div>
      <section className="quiz">
        <p className="correct-answers">
          {`Correct Answers: ${correctAnswers} out of ${questionNumber}`}
        </p>
        <article className="container">
          <h2>{question}</h2>
          <div className="btn-container">
            {shuffleArray(choices).map((choice, index) => {
              return (
                <button
                  key={index}
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
    </>
  );
};

export default SetupForm;
