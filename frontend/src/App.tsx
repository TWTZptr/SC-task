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
      <div className="content">d</div>
    </div>
  );
}

export default App;
