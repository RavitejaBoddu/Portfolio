import React from 'react'
import './Clock.css'
import AnalogClock from 'analog-clock-react';


const Clock = () => {

    let options = {
        width: "300px",
        border: true,
        borderColor: "#FCA61F",
        baseColor: "#383838",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
        }
      };

  return (
        <div className="clock">
            <AnalogClock {...options} />
        </div>
  )
}

export default Clock