import React from 'react'

function MernHistory(props) {
    return (
        <div style={{backgroundColor:"rgba(233, 215, 233, 1)"}}>
            <h1 style={{ color: "white", backgroundColor: "black", textAlign: "center", fontFamily: "Verdana", fontSize: "30px" }}>MERN Stack History & WorkFlow</h1>
            <h1  style={{backgroundColor: "rgba(209, 178, 222, 1)", textAlign: "left", fontFamily: "Verdana", fontSize: "20px"}}>Mern History</h1>
            <p style={{ color: "black",   fontFamily: "Verdana" }}>{props.name} evolved in the 2010s as developers shifted from fragmented multi-language stacks (like LAMP) to unified, 
                all-JavaScript ecosystems. It emerged as an evolution of the MEAN stack—replacing AngularJS with
                 React for front-end rendering—to provide a highly scalable,
                 open-source framework for building modern, single-page web applications.</p>
            <h1  style={{backgroundColor: "rgba(209, 178, 222, 1)", textAlign: "left", fontFamily: "Verdana", fontSize: "20px"}}>Mern Workflow</h1>
            <img src="../public/mern_workflow.jpg" alt="MernWorkflow" style={{width: "100%", height: "600px"}} />

        </div>
    )
}

export default MernHistory