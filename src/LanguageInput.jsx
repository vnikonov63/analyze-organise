export default function LanguageInput({
  flag,
  country,
  setCurrentWord,
  currentWord,
}) {
  return (
    <>
      <p>{flag}</p>
      <input
        type="text"
        placeholder=""
        onChange={(e) => setCurrentWord(e.target.value)}
        value={currentWord}
      />
    </>
  );
}
