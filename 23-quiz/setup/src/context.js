import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const initialURL =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(initialURL);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data) {
        const newQuestions = data.results.map((q) => {
          const {
            question,
            category,
            type,
            dificulty,
            incorrect_answers,
            correct_answer,
          } = q;
          return {
            question,
            category,
            type,
            dificulty,
            incorrect_answers,
            correct_answer,
            choices: [...incorrect_answers, correct_answer],
          };
        });

        setQuestions(newQuestions);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleStart = () => {
    setStart(true);
  };

  const handleNext = () => {
    //Make sure you change this
    index >= questions.length ? setIndex(0) : setIndex(index + 1);
  };

  const handleAnswers = (e, correct_answer) => {
    if (e.target.innerText === correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    handleNext();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        questions,
        isLoading,
        correctAnswers,
        index,
        handleNext,
        handleAnswers,
        handleStart,
        start,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
