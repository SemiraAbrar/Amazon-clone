import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  DataProvider,
} from "./Components/DataProvider/DataProvider.jsx";
import {initialstate,reducer} from "./Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialstate={initialstate}>
      <App />
    </DataProvider>
  </StrictMode>
);
