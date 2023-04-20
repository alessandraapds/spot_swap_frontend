import React, { useState, useRef } from "react";
import Offers from "../routes/Offers";
import "../styles/styles.css";

const Form = () => {
  const [input, setInput] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const myRef = useRef(null);

  // const executeScroll = () =>
  // // run this function from an event handler or an effect to execute scroll

  const saveInput = (e) => {
    e.preventDefault();
    setKeyword(input);
    setInput("");
    window.scrollTo(0, 5000);
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

      <Offers keyword={keyword} myRef={myRef} />
    </div>
  );
};

export default Form;
