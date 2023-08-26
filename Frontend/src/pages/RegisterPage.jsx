import React from 'react';
import { Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import "../styles/RegisterStyles.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post('http://localhost:8080/api/v1/user/register', values);
      dispatch(hideLoading());

      if (res.data.success) {
        message.success('Registered Successfully!');
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <div className='register-page-container'>
      <div className='register-form-container'>
        <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type='text' required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type='email' required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' required />
          </Form.Item>
          <Link to="/login" className="login-link">Already a user? Login Here</Link>
          <button className='btn btn-primary register-button' type='submit'>
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
