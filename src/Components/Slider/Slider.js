function Slider({scale, value, setTemperature}) {  
    function handleTemperatureChange(event) {
        const currentScale = event.target.id
        const currentValue = event.target.value
        let newTemperature = []
        let newCelsius = 0
        let newFarenheit = 0
        if (currentScale === 'celsius') {
            newCelsius = currentValue
            newFarenheit = newCelsius*9/5+32
            newTemperature = [
              {
                scale: "celsius",
                value: newCelsius,
              },
              {
                scale: "farenheit",
                value: Math.round(newFarenheit),
              },
            ];
            setTemperature(newTemperature)
        } else if (currentScale === 'farenheit') {
          newFarenheit = currentValue
          newCelsius = (newFarenheit-32)/1.8
            newTemperature = [
              {
                scale: "celsius",
                value: Math.round(newCelsius),
              },
              {
                scale: "farenheit",
                value: newFarenheit,
              },
            ];
            setTemperature(newTemperature)
        }
    }

    return (
      <div style={{width:'50%', margin: '0 auto', display: 'flex', gap: '16px', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 style={{width:'60px'}}>{value}</h2>
        <input style={{width:'100%'}} className="" type="range" id={scale} name={`${scale}-temperature`} min="-130" max="140" value={value} onChange={event=>handleTemperatureChange(event)}/>
        <label style={{width:'80px'}} htmlFor="volume" >{scale}</label>
      </div>
    );
  }
  
  export default Slider;