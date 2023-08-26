import React, { useEffect } from 'react'
import axios from 'axios';
import "../styles/HomeStyles.css";

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

  const showMenu = () => {
    navLinks.style.right = "0";
  };

  const hideMenu = () => {
    navLinks.style.right = "-200px";
  };

  return (
    <div className='home-page'>
      <section class="header">
        <div class="text-box">
          <h1>SkillUpGenius</h1>
          <p>"Welcome to SkillUpGenius, your ultimate destination for transformative online learning. Unleash your
            potential with our curated collection <br /> interactive courses designed to enhance your skills and
            knowledge across a spectrum of subjects. From technology to business, arts to sciences, our expert
            instructors guide you through hands-on lessons, ensuring you not only learn but also apply your newfound
            expertise. Whether you're a beginner or aiming for mastery, SkillUpGenius empowers you to learn at your
            own pace, earn certificates, connect with a thriving community, and embark on a journey of lifelong
            learning and growth. </p>
          <a href="" class="hero-btn">Visit Us To know More</a>
        </div>
      </section>

      <section class="footer">
        <h4> About Us</h4>
        <p>our mission is to empower and inspire students to become leaders, critical thinkers, and compassionate
          individuals who make a positive impact on society.<br /> We strive to offer a diverse and inclusive learning
          environment that promotes intellectual curiosity, creativity, and innovation.</p>
        <div class="icons">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-linkedin"></i>
          <i class="fa fa-twitter"></i>
        </div>
      </section>
    </div>
  )
}

export default HomePage;