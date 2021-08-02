import "./styles.css";
import React, { useState } from "react";
import AppendEmojis from "./appendlist";
import emojiDictionary from "./emojis";

function App() {
  //State
  const [result, setResult] = useState("");
  const [emoji, setEmoji] = useState(
    "The emoji meaning will be displayed here"
  );
  const [displayEmoji, setdisplayEmoji] = useState("");

  function changeState(event) {
    let inputValue = event.target.value;
    let meaning = emojiDictionary[inputValue];
    if (meaning === undefined) {
      setEmoji("");
      setResult("The emoji does not exist in our database.");
    } else {
      if (inputValue in emojiDictionary) setEmoji(inputValue);
      setResult(meaning);
    }
  }

  function displayMeaning(emoji) {
    setdisplayEmoji(emojiDictionary[emoji]);
  }

  return (
    <>
      <nav>
        <h1 className="heading">Music emoji App</h1>
      </nav>
      <div className="main-container">
        <div className="input-container">
          <input
            className="input-box"
            placeholder="Enter an emoji here"
            onChange={changeState}
          />
          <h3 className="emoji">{emoji}</h3>
          <h3 className="result-label">{result}</h3>
        </div>

        <div className="display-emojis">
          <h4>Click on any emoji to check its meaning</h4>
          <AppendEmojis showName={displayMeaning} />
          <span className="emoji-meaning-display">{displayEmoji}</span>
        </div>
      </div>
    </>
  );
}

export default App;
