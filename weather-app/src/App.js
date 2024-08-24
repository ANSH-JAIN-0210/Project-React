import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[place,setplace] = useState('');
  const[temp,settemp] = useState('');

  const getweather = () =>{
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`)
    .then((response)=>response.json())
    .then((data)=>settemp(data.main.temp))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Weather App</h1>
      <input placeholder='enter the city name' type='text' value={place} onChange={(e)=>setplace(e.target.value)} required/>
      <button onClick={()=>getweather()}>Search</button>
      <p>Temperature: {temp ? `${temp}°C` : 'N/A'}</p>
    </div>
  )
}


// const apiKey = 'bd5e378503939ddaee76f12ad7a97608';  
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
export default App