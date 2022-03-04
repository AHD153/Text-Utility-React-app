// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React, { useState } from 'react';
// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#0c0c60';
      showAlert("Darkmode has been enabled", "success");
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled", "success");
    }

  }

  return (
    <>

      {/* <BrowserRouter> */}
        <Navbar title='Text Utility' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/About" element={<About/>} />
              {/* <About /> */}
            {/* </Route> */}

            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text' mode={mode} />}/> */}
              {/* <TextForm showAlert={showAlert} heading='Enter the text' mode={mode} /> */}
            {/* </Route>
          </Routes> */}

          <TextForm showAlert={showAlert} heading='Enter the text' mode={mode}/>
          {/* <About /> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
