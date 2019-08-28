import React from "react";
import { Route } from "react-router-dom";
import LoginSignup from "./LoginSignup";

const App = () => <Route exact path="/" component={LoginSignup} />;
export default App;
