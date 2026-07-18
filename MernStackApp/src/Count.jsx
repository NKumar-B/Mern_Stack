import React, { useState } from 'react'
import './Count.css'
import Parent from './Parent.jsx'
function Count() {
    const [count,setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    const[mobile,setMobile]=useState("");
    function handlebuy(){
        setMobile("Samsung Galaxy A23 5G")
    }
    const[text,setText]=useState("");
    function handlechange(e){
        setText(e.target.value)
    }
    return (
    <div style={{backgroundColor: "rgba(254, 251, 202, 0.94)" ,height: "100vh",width: "100%",color: "white"}}>
        <h1 className="count">Count: {count}</h1>
        <button className='btn' onClick={handleIncrement}>Increment</button>
        <button className='btn' onClick={handleDecrement}>Decrement</button>    
  
        <h1 className="count">Mobile: {mobile}</h1>
        <button className='btn' onClick={handlebuy}>Buy</button>

        <h1 className="count">Text: My name is {text}</h1>
        <input className='input' type="text" placeholder='rice' onChange={handlechange}/>
        <button className='btn' onChange={handlechange}>Change</button>

        {/* <Parent name="Nithin"></Parent> */}
    </div>
  )
}

export default Count