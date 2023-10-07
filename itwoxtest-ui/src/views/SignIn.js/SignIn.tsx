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
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
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
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;






