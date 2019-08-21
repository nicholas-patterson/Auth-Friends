import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import LoadingScreen from "react-loading-screen";
import loading from "../img/loading.png";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const FriendsList = props => {
  const [friends, setFriends] = useState(null);
  console.log(props);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => setFriends(res.data))
      .catch(err => console.log(err.response));
  }, []);

  if (!friends) {
    return (
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc={loading}
        text="We're getting your friends"
      />
    );
  }

  return (
    <>
      {friends.map(friend => {
        return (
          <List>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </List>
        );
      })}
      <>
        <Button variant="contained" color="primary" href="/addfriend">
          Add New Friend
        </Button>
      </>
    </>
  );
};

export default FriendsList;
