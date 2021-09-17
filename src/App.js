import React from "react";
import { Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";

export default function App() {
  return (

    <>
    <BrowserRouter>
      <Route exact path="/" component={Home} > </Route>
      <Route exact path="/About" component={About} > </Route>
      </BrowserRouter>
    </>

  )}