import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import "./signin.scss"


type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  const handleAuthentication = (values: FormValues) => {
    const { email, password } = values;
    const correctEmail = 'prathameshdutondkar97@gmail.com';
    const correctPassword = 'Prathamesh@13';

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard');
      toast.success('Sign in successful!', { position: 'top-center' }); 
    } else {
      toast.error('Authentication failed. Please check your credentials.', {
        position: 'top-center',
      }); 
    }
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <h2 className="form-title">Sign In</h2>
        <Form name="basic" initialValues={{ remember: true }} onFinish={handleAuthentication}>
          <Form.Item
            className="form-item"
            label="username"
            name="email"
            rules={[
              { required: true, message: 'Please input your email address!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="form-button">
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
