import Slider from "./Components/Slider";
import React from "react";
import styles from './App.css'

function App() {
  const [temperature, setTemperature] = React.useState([
    {scale: 'celsius', value: 0},
    {scale: 'farenheit', value: 32},
  ])

  return (
    <main style={{position:'absolute', top:'45%', transform:'translateY(-50%)', width: '100%'}}>
      <h1>CELSI<span>HEIT</span></h1>
      <p>C to F and F to C visual converter</p>
        {temperature.map((item, id) => (
          <Slider scale={item.scale} value={item.value} setTemperature={setTemperature} key={id} />
        ))}
      <p className="footer">Made with ReactJS by <a href="http://www.github.com/kawaiier" target="_blank">kawaiier</a></p>
    </main>
  );
}

export default App;
