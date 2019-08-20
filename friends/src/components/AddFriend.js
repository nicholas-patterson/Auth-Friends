import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
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
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChange}
        />

        <button>Add Friend</button>
      </form>
    </>
  );
};

export default AddFriend;
