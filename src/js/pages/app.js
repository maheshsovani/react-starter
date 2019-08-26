import React from "react";
import { Route } from "react-router-dom";
import LoginSignup from "./LoginSignup";

const App = () => (
  <div>
    <Route exact path="/" component={LoginSignup} />
  </div>
);
export default App;
