import { useState } from "react";
import LanguageInput from "./LanguageInput";

const countries = [
  { id: "us", name: "USA", emoji: "🇺🇸" },
  { id: "uk", name: "United Kingdom", emoji: "🇬🇧" },
];

export default function Inputs() {
  const [currentWord, setCurrentWord] = useState("");
  return (
    <>
      {countries.map((country) => (
        <LanguageInput
          flag={country.emoji}
          country={country.name}
          key={country.id}
          id={country.id}
          setCurrentWord={setCurrentWord}
          currentWord={currentWord}
        />
      ))}
    </>
  );
}
