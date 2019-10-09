import React from "react";
import {Route} from "react-router-dom";
import LoginSignup from "./LoginSignup";
import Home from "./Home";

function App() {
  return (
    <div>
      <Route exact path="/" component={LoginSignup}/>
      <Route exact path="/home" component={Home}/>
    </div>
  );
}

export default App;
