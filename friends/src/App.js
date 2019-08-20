import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/login" component={LoginForm} />
      </Router>
    </>
  );
};

export default App;
