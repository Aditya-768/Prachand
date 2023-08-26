import React from 'react'
import "../styles/ProfileStyles.css"

const ProfilePage = () => {
  return (
    <>
    <div className="ProfileContainer">
      <div className="ProfileCard">
        <div className="ProfileName">Jane Smith</div>
        <div className="ProfileBio">Passionate Educator | Lifelong Learner</div>
        <div className="ProfileInfo">Subject: Mathematics</div>
        <div className="ProfileInfo">Experience: 7+ years</div>
        <div className="ProfileInfo">Location: Los Angeles, CA</div>
        <button className="EditButton">Edit Profile</button>
      </div>
    </div>
    </>
    
  );
}

export default ProfilePage;
