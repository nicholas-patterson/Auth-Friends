import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

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
    return <p>Loading...</p>;
  }

  return (
    <>
      {friends.map(friend => {
        return (
          <div>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
      <>
        <Link to="/addfriend">Add New Friend</Link>
      </>
    </>
  );
};

export default FriendsList;
