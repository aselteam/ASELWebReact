import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import '../CSS/SignupForm.css';
import '../CSS/reset.css';
import LoginForm from './Login';

const { Title } = Typography;

const SignupForm = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="signup-container">
      <Row justify="center">
        <Col span={12}>
          <Title level={2}>Signup</Title>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: 'Please enter your first name' },
              ]}
            >
              <Input prefix={<span className="required">*</span>} />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: 'Please enter your last name' },
              ]}
            >
              <Input prefix={<span className="required">*</span>} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input prefix={<span className="required">*</span>} />
            </Form.Item>

            <Form.Item
              label="Create Password"
              name="password"
              rules={[
                { required: true, message: 'Please enter a password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
            >
              <Input.Password
                prefix={<span className="required">*</span>}
                iconRender={visible => (visible ? <EyeOutlined /> : <EyeOutlined />)}
                visibilityToggle
              />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<span className="required">*</span>}
                iconRender={visible => (visible ? <EyeOutlined /> : <EyeOutlined />)}
                visibilityToggle
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">Signup</Button>
               <span className='signintxt'> 
                 <Link to="/Login">
                    Already a member? Log in here
                </Link>  
             </span>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignupForm;
