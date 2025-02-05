const rules = [
  { location: "end", variations: { us: "or", uk: "our" } },
  { location: "end", variations: { us: "er", uk: "re" } },
  { location: "end", variations: { us: "yze", uk: "yse" } },
];

export default function correctVersion({ word, id }) {
  if (!word) return;

  const rule = rules.find(
    ({ location, variations }) =>
      location === "end" && word.endsWith(variations[id])
  );

  if (!rule) return word;

  const fromVariation = id;
  const toVariation = id === "us" ? "uk" : "us";

  const baseWord = word.slice(0, -rule.variations[fromVariation].length);
  const updatedWord = baseWord + rule.variations[toVariation];

  return updatedWord;
}
