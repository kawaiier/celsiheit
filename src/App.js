import Slider from "./Components/Slider";
import React from "react";
import styles from './App.css'

function App() {
  const [temperature, setTemperature] = React.useState([
    {scale: 'celsius', value: 0},
    {scale: 'farenheit', value: 32},
  ])

  return (
    <>
    <main >
      <h1>CELSI<span>HEIT</span></h1>
      <p>C to F and F to C visual converter</p>
        {temperature.map((item, id) => (
          <Slider scale={item.scale} value={item.value} setTemperature={setTemperature} key={id} />
        ))}
    </main>
    <footer>
      <p>made with React by <a href="http://www.github.com/kawaiier" target="_blank">kawaiier</a></p>
      <p className="source"><a href="https://github.com/kawaiier/celsiheit" target="_blank">source code on GitHub</a></p>
    </footer>
    </>
  );
}

export default App;
