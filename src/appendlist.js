import React from "react";
import emojiDictionary from "./emojis";
import "./styles.css";

function RenderItem({ symbol, displayfunc }) {
  return (
    <li className="list-item" onClick={(e) => displayfunc(symbol)}>
      <h2> {symbol}</h2>
    </li>
  );
}

function AppendEmojis({ showName }) {
  return (
    <ul className="emoji-list">
      {Object.keys(emojiDictionary)
        .slice(0, 10)
        .map((emoji) => {
          return (
            <RenderItem
              key={emojiDictionary[emoji]}
              symbol={emoji}
              displayfunc={showName}
            />
          );
        })}
    </ul>
  );
}

export default AppendEmojis;
