import React from "react";
import "./App.css";
import { getAllCities } from "./services/CityService";
import { getAllCitizens } from "./services/CitizenService";

function App() {
  React.useEffect(() => {
    getAllCities().then((res) => {
      if (res.ok) {
        console.log(res.data);
      }
    });

    getAllCitizens().then((res) => {
      if (res.ok) {
        console.log(res.data);
      }
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
