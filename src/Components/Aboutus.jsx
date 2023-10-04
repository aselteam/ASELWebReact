import React from 'react';
import { Card, Row, Col, Statistic, Progress } from 'antd';
import '../CSS/reset.css';
import HeaderComponent from './Header';
import '../CSS/About.css';

const Aboutus = () => {
  return (
    <div>
      <HeaderComponent />

      <div className="about-content">
        <Card className="about-card">
          <h2>A S E L</h2>
          <p>A Software Engineer's Life</p>
        </Card>

        <Card className="about-card">
          <h2>Life Of Young Engineers</h2>
          <p>
            A Friends Organization initiated by Mr. Kanagaraj Ramasamy (KR) with immense dedication, hard work, and personal commitment...
          </p>
        </Card>

        <Card className="about-card">
          <h2>Organization Growth</h2>
          <p>
            What began with just one person has now grown to include over 3000+ members within the span of a few years. This idea was set in motion in 2015 by our esteemed Mr. K.R.
          </p>
        </Card>
        
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card className="statistic-card">
              <Statistic title="Total Members" value={3000} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card className="statistic-card">
              <Statistic title="IT Experience" value={87} suffix="%" />
              <Progress percent={87} showInfo={false} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card className="statistic-card">
              <Statistic title="Blood Donation Campaigns" value={23} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Card className="statistic-card">
              <Statistic title="Tree Planting Drives" value={10} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Aboutus;
