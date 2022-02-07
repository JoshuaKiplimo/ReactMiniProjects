import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { handleStart, handleChange, input } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={(e) => handleStart(e)}>
        <h2>Setup Quiz</h2>
        <div className="formControl">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-input"
            min="1"
            max="50"
            defaultValue="10"
            value={input.amount}
            onChange={handleChange}
          ></input>
        </div>
        <div className="formControl">
          <label htmlFor="Category">Choose Category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={input.category}
            onChange={handleChange}
          >
            <option defaultValue="sports">sports</option>
            <option defaultValue="history">history</option>
            <option defaultValue="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            value={input.difficulty}
            onChange={handleChange}
          >
            <option defaultValue="easy">easy</option>
            <option defaultValue="medium">medium</option>
            <option defaultValue="hard">hard</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          start
        </button>
      </form>
    </section>
  );
};

export default Modal;
