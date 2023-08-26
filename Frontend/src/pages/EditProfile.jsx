import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import '../styles/EditProfileStyles.css'; // Adjust the path based on your project structure

const EditProfilePage = () => {
  const user = useSelector(state => state.user); // Assuming you have a user reducer
  const [formData, setFormData] = useState({ name: user.name, email: user.email });
  const [background, setBackground] = useState('#f0f0f0');
  const dispatch = useDispatch();

  const onFinishHandler = async () => {
    try {
      // Make API call to update user profile
      const res = await axios.put('http://localhost:8080/api/v1/user/profile', formData);
      
      if (res.data.success) {
        alert('Profile updated successfully');
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  const handleBackgroundChange = () => {
    setBackground('#f9f9f9'); // Change to the desired background color
  };

  return (
    <div className="edit-profile-page" style={{ backgroundColor: background }}>
      <div className="edit-profile-form">
        <h3>Edit Profile</h3>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <button className="save-button" onClick={onFinishHandler} onMouseOver={handleBackgroundChange}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
