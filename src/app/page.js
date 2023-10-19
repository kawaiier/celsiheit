'use client'

import Slider from "@/Components/Slider"
import React from "react";

export default function Home() {
  //const [celsius, setCelsius] = React.useState(0)
  //const [farenheit, setFarenheit] = React.useState(32)
  const [temperature, setTemperature] = React.useState([
    {scale: 'celsius', value: 0},
    {scale: 'farenheit', value: 32},
  ])

  return (
    <main className="bg-neutral-500 h-screen flex flex-col justify-evenly	">
      <h1 className="text-center text-6xl	">C to F and F to C visual converter</h1>
      
        {/* <Slider scale={celsius} id='celsius' action={setCelsius}/>
        <Slider scale={farenheit} id='farenheit' action={setFarenheit}/> */}
        {temperature.map((item, id) => (
          <Slider className="text-center text-2xl" scale={item.scale} value={item.value} setTemperature={setTemperature} key={id} />
        ))}
      
    </main>
  );
}


//°F = (°C × 9/5) + 32