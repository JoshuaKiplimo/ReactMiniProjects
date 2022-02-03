import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { handleStart } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>Setup Quiz</h2>
        <div className="formControl">
          <label for="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            class="form-input"
            min="1"
            max="50"
            value="10"
          ></input>
        </div>
        <div className="formControl">
          <label for="Category">Choose Category</label>
          <select name="category" id="category" class="form-input">
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div class="form-control">
          <label for="difficulty">select difficulty</label>
          <select name="difficulty" id="difficulty" class="form-input">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button type="submit" class="submit-btn" onClick={handleStart}>
          start{" "}
        </button>
      </form>
    </section>
  );
};

export default Modal;
