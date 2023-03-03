import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Location from './components/Location'
import data from "./data"

function App() {
  const locations = data.map((place) => {
    return <Location
            key={crypto.randomUUID()}
            {...place}
            />
  })
  return (
    <div className="App">
      <Header/>
      <div className="center">
        {locations}
      </div>
    </div>
  )
}

export default App
