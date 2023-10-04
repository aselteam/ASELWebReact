import React from 'react';
import { Card, Row, Col } from 'antd';
import '../CSS/society.css';
import '../CSS/reset.css';

const Society = () => {
  const campaigns = [
    {
      type: 'Tree Plantation',
      image: 'download.jpg',
      date: '2023-10-05',
      venue: 'City Park',
      treesPlanted: 100,
      volunteers: 20
    },
    {
      type: 'Tree Plantation',
      image: 'download1.jpg',
      date: '2023-10-10',
      venue: 'Forest Reserve',
      treesPlanted: 200,
      volunteers: 30
    },
    {
      type: 'Tree Plantation',
      image: 'download3.jpg',
      date: '2023-10-15',
      venue: 'Botanical Garden',
      treesPlanted: 150,
      volunteers: 25
    }
  ];

  const bloodDonation = [
    {
      type: 'Blood Donation',
      image: 'download6.avif',
      date: '2023-10-12',
      place: 'Local Community Center',
      peopleJoined: 50
    },
    {
      type: 'Blood Donation',
      image: 'download4.avif',
      date: '2023-10-20',
      place: 'City Hospital',
      peopleJoined: 40
    },
    {
      type: 'Blood Donation',
      image: 'download5.avif',
      date: '2023-10-25',
      place: 'Red Cross Society',
      peopleJoined: 60
    }
  ];

  return (
    <div>
      <h2>The Importance of Tree Plantation</h2>
      <p>Explain why tree plantation is important...</p>

      <h2>Tree Plantation Campaigns</h2>
      <Row gutter={[16, 16]}>
        {campaigns.map((campaign, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8}>
            <Card className="campaign-card">
              <div className="card-front">
                <img alt={campaign.type} src={campaign.image} className="card-image" />
              </div>
              <div className="card-footer">
                <p>Date: {campaign.date}</p>
                <p>Venue: {campaign.venue}</p>
                <p>Trees Planted: {campaign.treesPlanted}</p>
                <p>Volunteers: {campaign.volunteers}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>The Importance of Blood Donation</h2>
      <p>Explain why blood donation is important...</p>

      <h2>Blood Donation Campaigns</h2>
      <Row gutter={[16, 16]}>
        {bloodDonation.map((campaign, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8}>
            <Card className="campaign-card">
              <div className="card-front">
                <img alt={campaign.type} src={campaign.image} className="card-image" />
              </div>
              <div className="card-footer">
                <p>Date: {campaign.date}</p>
                <p>Place: {campaign.place}</p>
                <p>People Joined: {campaign.peopleJoined}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Society;
