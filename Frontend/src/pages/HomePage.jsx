import React, { useEffect } from 'react'
import axios from 'axios';

const HomePage = () => {

  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/getUserData", { token: localStorage.getItem('token') }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
      <h1>Home Page</h1>
  )
}

export default HomePage;