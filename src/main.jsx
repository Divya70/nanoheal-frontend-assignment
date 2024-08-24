import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <BookProvider>
          <App />
        </BookProvider>
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);
