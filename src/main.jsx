import ReactDOM from "react-dom/client";
import {createRoot, StrictMode} from "react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
