import "./styles/index.css";
import { renderApp } from "./App.js";
import { initializePresentation } from "./presentation.js";

const app = document.getElementById("app");

if (!app) throw new Error("Presentation root element was not found");

renderApp(app);
initializePresentation();
