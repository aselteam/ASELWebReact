import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom'; 
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined,
  CalendarOutlined,
  PictureOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../CSS/reset.css';
import '../CSS/Header.css'; 

const { Header } = Layout;

const HeaderComponent = () => {
    const location = useLocation();
   
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[location.pathname]} className="menu">
        <Menu.Item key="Home" icon={<HomeOutlined />} className="menu-item">
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="About-us" icon={<InfoCircleOutlined />} className="menu-item">
           <Link to="/About-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="Activity" icon={<AppstoreAddOutlined />} className="menu-item">
           <Link to="/Activity">Activities</Link>
        </Menu.Item>
        <Menu.Item key="Events" icon={<CalendarOutlined />} className="menu-item">
            <Link to="/Events">Events</Link>
        </Menu.Item>
        <Menu.Item key="Gallery" icon={<PictureOutlined />} className="menu-item">
            <Link to="/Gallery">Gallery</Link>
        </Menu.Item>
        <Menu.Item key="Contact" icon={<MailOutlined />} className="menu-item">
            <Link to="/Contact">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="Sign-in" icon={<UserOutlined />} className="menu-item">
             <Link to="/Sign-in">SignUp/Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
