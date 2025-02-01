import { useState } from "react";
import correctVersion from "./rules";

export default function LanguageInput({
  flag,
  id,
  country,
  setCurrentWord,
  currentWord,
}) {
  const [wordValidity, setWordValidity] = useState(false);
  return (
    <>
      <p>{flag}</p>
      <input
        type="text"
        placeholder=""
        onChange={(e) => setCurrentWord(e.target.value)}
        value={correctVersion({ word: currentWord, id: id })}
      />
      {wordValidity ? <p>✅</p> : <p>❌</p>}
    </>
  );
}
