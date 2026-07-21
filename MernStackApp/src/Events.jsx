import React from 'react'

function Events() {
    const handleClick =()=>{
        alert("Welcome To My MERN Stack Application...")
    }
    const handleMouseLeave =()=>{
        alert("Thank you for Visiting us. Keep in Touch for Regular Updates...")
    }

    function pressed(e){
        alert(e.key);
    }
  return (
    <>
    <div>
        <button onMouseOver={handleClick}>Hover Me</button>
        <button onMouseLeave={handleMouseLeave}>Click Me</button>
        <input onKeyDown={pressed}/>
        <input onFocus={(()=>console.log("Focused"))} onBlur={()=>{console.log("Blurred") }}  />
        
    </div>
    </>
  )
}

export default Events