import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <StrictMode>
      <h1>Hello, Whats is happening</h1>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
