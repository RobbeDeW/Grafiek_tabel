import React from "react";
import "./App.css";
import BarChartComponent from "./BarChartComponent";
import TabelComponent from "./TabelComponent";

function App() {
  return (
    <div className="App">
      <h1>Bedrijfswinsten en Uitgaven per Jaar</h1>
      <BarChartComponent />
      <TabelComponent />
    </div>
  );
}

export default App;
