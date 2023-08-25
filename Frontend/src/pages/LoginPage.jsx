import React from 'react';
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {

  const navigate = useNavigate();

  // Form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/login', values);
      // window.location.reload();
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success('Login Successfully!');
        navigate('/');
      } else {
        message.error(res.data.message);
      };
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    };
  };

  return (
    <div>
      <div className='form-container'>
        <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
          <h3 className='text-center'>Login Form</h3>
          <Form.Item label="Email" name="email" >
            <Input type='email' required />
          </Form.Item>
          <Form.Item label="Password" name="password" >
            <Input type='password' required />
          </Form.Item>
          <Link to="/register" className="m-2">Not a user? Register Here</Link>
          <button className='btn btn-primary' type='submit'>Login</button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage;