import React from "react";
import {Route,Routes} from 'react-router-dom';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/contact";

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/About' element={<About />} />
       <Route path='/Project' element={<Project />} />
       <Route path='/Contact' element={<Contact />} />
       </Routes>
    </div>
  );
}

export default App;
