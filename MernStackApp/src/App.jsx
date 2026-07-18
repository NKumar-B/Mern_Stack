import React from 'react'

function App() {
  return (
    <div style={{backgroundColor:"rgba(233, 215, 233, 1)"}}>
      <h1 style={{color: "black", backgroundColor: "aquamarine", textAlign: "center", fontFamily: "Verdana", fontSize: "50px"}}>WELCOME TO THE MERN STACK WORLD</h1>
      <p>The MERN stack is a popular set of JavaScript technologies used to build dynamic, full-stack web applications. It consists of MongoDB (database), Express.js (backend server), React (frontend user interface), and Node.js (runtime environment). This allows developers to build entire apps using a single programming language.</p>
      <img src="../public/mern_thumbnail.jpg" alt="MERN Stack" style={{width: "100%", height: "600px"}} />
      <ul style={{backgroundColor:"rgba(252, 227, 252, 1)"}}>
        <h1 style={{backgroundColor: "rgba(209, 178, 222, 1)", textAlign: "left", fontFamily: "Verdana", fontSize: "20px"}}>MongoDB (Database Layer)</h1>
      <li> <b>What it is:</b> A NoSQL, document-oriented database.</li>
      <li> <b>Role:</b> It serves as the data storage tier for the application.</li>
      <li> <b>Key Feature:</b> Instead of tables and rows, it stores data in flexible, JSON-like structures called BSON. This makes it natively compatible with JavaScript code, eliminating the need for complex data translation. Developers often use an Object Data Modeling (ODM) tool called Mongoose to interact with it. </li>
      <h1 style={{backgroundColor: "rgba(209, 178, 222, 1)", textAlign: "left", fontFamily: "Verdana", fontSize: "20px"}}>Express.js (Backend Framework)</h1>
      <li> <b>What it is:</b> A minimalist web framework for Node.js.</li>
      <li> <b>Role:</b> It acts as the "glue" between MongoDB and the front-end, handling routing, middleware, and API request/response handling.</li>
      <li> <b>Key Feature:</b> Its middleware system allows developers to easily add functionality like authentication, logging, and request validation. </li>
      <h1 style={{backgroundColor: "rgba(209, 178, 222, 1)", textAlign: "left", fontFamily: "Verdana", fontSize: "20px"}}>React (Frontend Library)</h1>
      <li> <b>What it is:</b> A JavaScript library for building user interfaces.</li>
      <li> <b>Role:</b> It is responsible for rendering the UI and managing the state of the client-side application.</li>
      <li> <b>Key Feature:</b> It uses a declarative approach and a virtual DOM to efficiently update the UI, making it ideal for building fast, interactive web applications. </li>
      <h1 style={{backgroundColor: "rgba(209, 178, 222, 1)", textAlign: "left", fontFamily: "Verdana", fontSize: "20px"}}>Node.js (Runtime Environment)</h1>
      <li> <b>What it is:</b> A JavaScript runtime environment.</li>
      <li> <b>Role:</b> It is responsible for running the backend code of the application.</li>
      <li> <b>Key Feature:</b> It uses a non-blocking I/O model to efficiently handle multiple requests at once. </li>
      </ul>

    </div>
  )
}

export default App