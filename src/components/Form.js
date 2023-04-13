import React, { useState } from "react";
import Offers from "../routes/Offers";

const Form = () => {
  const [input, setInput] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const saveInput = (e) => {
    e.preventDefault();
    setKeyword(input);
    setInput("");
  };

  return (
    <div class="container">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Find a spot" onClick={saveInput} />
      </form>
      <Offers keyword={keyword} />
    </div>
  );
};

export default Form;
