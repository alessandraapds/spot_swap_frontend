import React, { useState } from "react";
import Offers from "../routes/Offers";
import "../styles/styles.css";

const Form = () => {
  const [input, setInput] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const saveInput = (e) => {
    e.preventDefault();
    setKeyword(input);
    setInput("");
  };

  return (
    <div>
      <div class="search-form">
        <h4>"Swap your spot. Unlock your city"</h4>
        <div class="container  d-flex justify-content-around">
          <form>
            <input
              type="text"
              class="search-input"
              value={input}
              placeholder="Insert a reference point or a city"
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              type="submit"
              class="search-button"
              value="Find me a spot"
              onClick={saveInput}
            />
          </form>
        </div>
      </div>

      <Offers keyword={keyword} />
    </div>
  );
};

export default Form;
