/* import About from './components/About'; */
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/* import About from './components/About'; */
import React, { useState } from 'react';
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; */

function App() {
  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setToggleText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      setToggleText('Enable Light Mode');
      document.body.style.backgroundColor = '#0a204b';
    }
  };

  return (
    <>
      {/* <Router> */}
        <div className="App">
          <Navbar heading="TextCraft" mode={mode} toggleMode={toggleMode} toggleText={toggleText} />
          <div className="container my-3">
            {/* <Routes> */}
              {/* <Route exact path="/about" element={<About />} /> */}
              {/* <Route exact path="/" element={ */}<TextForm title="Enter Your Text Here" mode={mode}/>
            {/* </Routes> */}
          </div>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

