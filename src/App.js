import Slider from "./Components/Slider";
import React from "react";


function App() {
  const [temperature, setTemperature] = React.useState([
    {scale: 'celsius', value: 0},
    {scale: 'farenheit', value: 32},
  ])

  return (
    <main style={{position:'absolute', top:'45%', transform:'translateY(-50%)', width: '100%'}}>
      <h1 style={{textAlign:'center'}}>CELSI<span style={{color: 'white', backgroundColor: 'black'}}>HEIT</span></h1>
      <p style={{textAlign:'center'}}>C to F and F to C visual converter</p>
        {temperature.map((item, id) => (
          <Slider scale={item.scale} value={item.value} setTemperature={setTemperature} key={id} />
        ))}
      
    </main>
  );
}

export default App;
