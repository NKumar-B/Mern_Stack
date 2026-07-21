import React, { useState } from 'react'

function Light() {
    const [isOn, setIsOn] = useState(false)

    function handleTurnOn() {
        setIsOn(true)
    }

    function handleTurnOff() {
        setIsOn(false)
    }

    function handleToggle() {
        setIsOn(!isOn)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Light Bulb</h1>

            <div>
                {isOn ? (
                    <img
                        src="https://www.w3schools.com/js/pic_bulbon.gif"
                        alt="Light On"
                        onClick={handleToggle}
                        style={{ width: '150px', cursor: 'pointer' }}
                    />
                ) : (
                    <img
                        src="https://www.w3schools.com/js/pic_bulboff.gif"
                        alt="Light Off"
                        onClick={handleToggle}
                        style={{ width: '150px', cursor: 'pointer' }}
                    />
                )}
            </div>

            <h2>Status: {isOn ? 'Light is ON' : 'Light is OFF'}</h2>

            <div>
                <button onClick={handleTurnOn} style={{ margin: '5px', padding: '8px 15px' }}>
                    Turn ON
                </button>
                <button onClick={handleTurnOff} style={{ margin: '5px', padding: '8px 15px' }}>
                    Turn OFF
                </button>
            </div>
        </div>
    )
}

export default Light