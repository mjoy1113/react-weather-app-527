import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Morgan Rumsey and is open-sourced on{" "}
          <a
            href="https://github.com/mjoy1113/react-weather-app-527.git"
            target="blank"
            className="footer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
