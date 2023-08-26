import React from 'react';
import "../styles/RegisterStyles.css";
import { Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const navigate = useNavigate();
  const dispath = useDispatch();

  // Form Handler
  const onfinishHandler = async (values) => {
    try {
      dispath(showLoading());
      const res = await axios.post('/api/v1/user/register', values);
      dispath(hideLoading());
      if (res.data.success) {
        message.success('Register Successfully!');
        navigate('/login');
      } else {
        message.error(res.data.message);
      };
    } catch (error) {
      dispath(hideLoading());
      console.log(error);
      message.error('Something went wrong');
    };
  };

  return (
    <>
      <div className='form-container'>
        <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label="Name" name="name" >
            <Input type='text' required />
          </Form.Item>
          <Form.Item label="Email" name="email" >
            <Input type='email' required />
          </Form.Item>
          <Form.Item label="Password" name="password" >
            <Input type='password' required />
          </Form.Item>
          <Link to="/login" className="m-2">Already a user? Login Here</Link>
          <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default RegisterPage;