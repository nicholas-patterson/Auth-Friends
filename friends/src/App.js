import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
// material ui theme

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey[800],
      main: blueGrey[700],
      dark: blueGrey[900],
      contrastText: "#fff"
    },
    secondary: {
      main: blueGrey[50]
    }
  },
  spacing: 10
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Container maxWidth="sm">
            <Route exact path="/login" component={LoginForm} />
            <PrivateRoute exact path="/friendslist" component={FriendsList} />
            <Route exact path="/addfriend" component={AddFriend} />
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
