import styles from './Slider.module.css'


function Slider({scale, value, setTemperature}) {  
    function handleTemperatureChange(event) {
        const currentScale = event.target.id
        const currentValue = event.target.value
        let newTemperature = []
        let newCelsius = 0
        let newFarenheit = 0
        if (currentScale === 'celsius') {
            newCelsius = currentValue
            if (newCelsius <= 60 && newCelsius>=-90){
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
            } 
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
      <div className={styles.container}>
        <h2>{value}</h2>
        <input type="range" id={scale} name={`${scale}-temperature`} min="-130" max="140" value={value} onChange={event=>handleTemperatureChange(event)}/>
        <label htmlFor="volume" >{(scale === 'celsius') ? 'C°' : 'F°' }</label>
      </div>
    );
  }
  
  export default Slider;