import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [input, setInput] = useState({
    category: "sports",
    amount: "10",
    difficulty: "easy",
  });

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

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
  const handleStart = (e) => {
    e.preventDefault();
    const API_ENDPOINT = "https://opentdb.com/api.php?";
    const URL_constructor = `amount=${input.amount}&category=${
      table[input.category]
    }&difficulty=${input.difficulty}`;
    const url = `${API_ENDPOINT}${URL_constructor}`;
    fetchData(url);
    setIsEnd(false);
    setCorrectAnswers(0);
    setStart(true);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setInput({ ...input, [name]: value });
  };

  const handleNext = () => {
    if (index >= questions.length - 1) {
      setIsEnd(true);
    } else {
      setIndex(index + 1);
    }
  };

  const handleAnswers = (e, correct_answer) => {
    if (e.target.innerText === correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    handleNext();
  };
  const replayGame = () => {
    console.log("end");
    setIsEnd(true);
    setStart(false);
  };

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
        handleChange,
        start,
        isEnd,
        setIsEnd,
        setStart,
        input,
        replayGame,
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
