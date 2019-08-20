import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
        <Route exact path="/addfriend" component={AddFriend} />
      </Router>
    </>
  );
};

export default App;
