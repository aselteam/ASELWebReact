import React, { useState } from 'react';
import { Button } from 'antd';
import '../CSS/reset.css';
import HeaderComponent from './Header';
import Lectureseries from './Lectureseries';
import Society from './society';
import Alumni from './alumni';

const Events = () => {
  const [activeButton, setActiveButton] = useState('lectureSeries');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Button
          type={activeButton === 'lectureSeries' ? 'primary' : 'default'}
          onClick={() => handleButtonClick('lectureSeries')}
        >
          Lecture Series
        </Button>
        <Button
          type={activeButton === 'societyDevelopment' ? 'primary' : 'default'}
          onClick={() => handleButtonClick('societyDevelopment')}
          style={{ margin: '0 10px' }}
        >
          Society Development Activities
        </Button>
        <Button
          type={activeButton === 'alumniMeets' ? 'primary' : 'default'}
          onClick={() => handleButtonClick('alumniMeets')}
        >
          Alumni Meets
        </Button>
      </div>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        {activeButton === 'lectureSeries' && (
          <div>
            {/* Content for Lecture Series */}
            <Lectureseries></Lectureseries>
          </div>
        )}

        {activeButton === 'societyDevelopment' && (
          <div>
            {/* Content for Society Development Activities */}
            <Society></Society>
          </div>
        )}

        {activeButton === 'alumniMeets' && (
          <div>
            {/* Content for Alumni Meets */}
            <Alumni></Alumni>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
