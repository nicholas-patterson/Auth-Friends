import React, { useState } from "react";
import axios from "axios";

const LoginForm = props => {
  console.log(props);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    props.history.push("/");
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
