import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import '../CSS/Login.css';
import '../CSS/reset.css';


const { Title } = Typography;

const LoginForm = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="login-container">
      <Row justify="center">
        <Col span={12}>
          <Title level={2}>Login</Title>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            
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
              label="Enter  Password"
              name="password"
              rules={[
                { required: true, message: 'Please enter Your password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
            >
              <Input.Password
                prefix={<span className="required">*</span>}
                iconRender={visible => (visible ? <EyeOutlined /> : <EyeOutlined />)}
                visibilityToggle
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;
