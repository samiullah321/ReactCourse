import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch ,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = '#042743';
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      document.title="TextUtils - Ligth Mode";
    }
  }

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
        {/* /users --> Component 1
            /users/home --> Component 2 */}
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              </Route>
        </Switch>
      </div>
    </Router>
  </>
);
}

export default App;
