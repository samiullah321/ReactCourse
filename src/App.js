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
  const [active, setActive] = useState('home');

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success') 
  // }

  const toggleMode = (cls)=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success"); 
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
      //document.title="TextUtils - Ligth Mode";
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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} active={active} setActive={setActive}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
        {/* /users --> Component 1
            /users/home --> Component 2 */}
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
              </Route>
        </Switch>
      </div>
    </Router>
  </>
);
}

export default App;
