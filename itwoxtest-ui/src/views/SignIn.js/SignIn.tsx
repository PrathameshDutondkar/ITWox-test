import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string }) => {
    const { email, password } = values;

    if (email === 'prathameshdutondkar97@gmail.com' && password === 'Prathamesh@13') {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard');
    } else {
      console.log('Authentication failed');
    }
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        <h2 className="form-title">Sign In</h2>
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            className="form-item"
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email address!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="form-item"
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
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






