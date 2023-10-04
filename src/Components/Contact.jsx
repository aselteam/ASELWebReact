import React from 'react';
import { motion } from 'framer-motion'; 
import HeaderComponent from './Header';
import { Form, Input, Button, Row, Col, Typography } from 'antd'; 
import '../CSS/reset.css';

const { Title } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <HeaderComponent />
      <Row justify="center">
        <Col span={12}>
          <Title level={2}>Contact Us</Title>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter your name' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Your Message"
              name="message"
              rules={[
                { required: true, message: 'Please enter your message' },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">Send Message</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
