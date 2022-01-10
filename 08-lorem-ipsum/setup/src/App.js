import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphSize, useParagraphSize] = useState(0);
  const [text, useText] = useState([]);
  //console.log(data[8]);
  const RegisterInput = (e) => {
    const value = e.target.value;
    useParagraphSize(value);
  };
  const SubmitData = (e) => {
    e.preventDefault();
    //validate paragraph
    // if (paragraph) {
    // }
    useText(() => {
      if (paragraphSize <= 0) {
        return data.slice(0, 1);
      } else if (paragraphSize > data.length) {
        return data.slice(0, data.length);
      }
      return data.slice(0, data.length);
    });
    useParagraphSize(paragraphSize);
  };

  return (
    <>
      <main>
        <section className="section-center">
          <h3>tired of boring lorem ipsum?</h3>
          <form className="lorem-form">
            <label htmlFor=""> Paragraphs </label>
            <input
              type="number"
              id="paragraph"
              name="paragraph"
              value={paragraphSize}
              onChange={RegisterInput}
            />
            <button className="btn" onClick={SubmitData}>
              Generate
            </button>
          </form>

          {text.map((paragraph, index) => {
            return (
              <div key={index} className="result">
                <p>{paragraph}</p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
