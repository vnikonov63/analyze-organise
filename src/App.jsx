import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Inputs from "./Inputs";

const App = () => {
  return (
    <StrictMode>
      <Inputs />
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
