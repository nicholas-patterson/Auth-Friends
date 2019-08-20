import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  containedPrimary: {
    marginTop: "10px"
  },
  root: {
    marginTop: "25px"
  }
});

const LoginForm = props => {
  const theme = useTheme();
  const classes = useStyles();
  console.log(props);
  const [user, setUser] = useState({});

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => err.response);
    props.history.push("/friendslist");
  };

  console.log(theme);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          classes={{ root: classes.root }}
          fullWidth
          type="text"
          name="username"
          placeholder="Enter Username"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          classes={{ root: classes.root }}
          fullWidth
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          classes={{ containedPrimary: classes.containedPrimary }}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
