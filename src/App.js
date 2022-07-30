import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  const [Mode,setMode]= useState('dark');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>
      {
        setAlert(null)
      },1500);
  }

  const toggleMode=()=>
  {
    if(Mode ==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled ","success");
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='black';
    showAlert("Dark mode has been enabled ","success");
    }
}
  return (
    <>
    <Router>
    <Navbar title="TextUtil" Mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" Mode={Mode}/>
          </Route>
    </Switch>
    
    
    </div>
    </Router>
    </>
  );
}

export default App;
