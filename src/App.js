import React from "react";
import Header from "./components/Header";

import "./styles/style.css";

function App() {
  return (
    <>
      <div className="main-content">
        <Header />
      </div>
      <footer>
        <h2 className="footer-content">MIT License © 2023 by Sam Tomaka</h2>
      </footer>
    </>
  );
}

export default App;
