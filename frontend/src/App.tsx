import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  React.useEffect(() => {
    axios.get("/api/cities").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
