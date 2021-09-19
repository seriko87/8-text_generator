import React, { useState } from "react";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(value);
    if (amount >= data.length) {
      amount = data.length;
    }
    if (amount <= 0) {
      amount = 1;
    }
    setText(data.slice(0, amount));

    console.log(text);
  };
  return (
    <div>
      <h1>tired of boring lorem ipsum?</h1>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='number'>Pragraphs: </label>
          <input
            type='number'
            name='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>Generate</button>
        </form>
      </div>

      <div className='text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
