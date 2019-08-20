import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  containedPrimary: {
    marginTop: "10px"
  },
  root: {
    marginTop: "25px"
  }
});

const AddFriend = props => {
  const classes = useStyles();
  const [newFriend, setNewFriend] = useState({});

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setNewFriend("");
    props.history.push("/friendslist");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          classes={{ root: classes.root }}
          fullWidth
          type="text"
          name="name"
          placeholder="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <TextField
          classes={{ root: classes.root }}
          fullWidth
          type="number"
          name="age"
          placeholder="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <TextField
          classes={{ root: classes.root }}
          fullWidth
          type="email"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChange}
        />

        <Button
          type="submit"
          classes={{ containedPrimary: classes.containedPrimary }}
          variant="contained"
          color="primary"
        >
          Add Friend
        </Button>
      </form>
    </>
  );
};

export default AddFriend;
