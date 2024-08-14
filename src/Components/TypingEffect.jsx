import React from "react";
import { useState, useEffect } from "react";
// import "./Home.css";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearnterval(interval);
  }, [text, speed]);
  return <div className="typing-effact">{displayedText}</div>;
};
export default TypingEffect;
