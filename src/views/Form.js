import React, { useState } from "react";
import Offers from "../routes/Offers";

const Form = () => {
  const [input, setInput] = useState(null);
  const [keyword, setKeyword] = useState(null);

  return (
    <div class="container">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="submit"
          value="Find me a parking spot"
          onClick={setKeyword}
        />
      </form>
      <Offers keyword={keyword} />
    </div>
  );
};

export default Form;
