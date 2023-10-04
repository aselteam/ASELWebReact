import React from 'react';
import { Card } from 'antd';
import '../CSS/reset.css';
import ReactPlayer from 'react-player';

const Lectureseries = () => {
  const lectureData = [
    {
      "id": 1,
      "name": "John Doe",
      "programDetails": "Introduction to AWS",
      "youtubeLink": "https://www.youtube.com/watch?v=WrA9F8zRfy4",
      "date": "2023-10-03",
      "host": "AWS Online Event"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "programDetails": "Advanced Python Techniques",
      "youtubeLink": "https://www.youtube.com/watch?v=a9__D53WsUs",
      "date": "2023-10-10",
      "host": "Python Conference"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "programDetails": "React Best Practices",
      "youtubeLink": "https://www.youtube.com/watch?v=HbIMwaWvT6g",
      "date": "2023-10-17",
      "host": "React Meetup"
    }
  ];

  return (
   <div>
      {lectureData.map((lecture) => (
        <Card key={lecture.id} style={{ margin: '10px', width: '80%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '10px' }}>
              <ReactPlayer url={lecture.youtubeLink} width="100%" height="auto" controls />
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
              <h3>Name: {lecture.name}</h3>
              <p>Program Details: {lecture.programDetails}</p>
              <p>Date: {lecture.date}</p>
              <p>Host: {lecture.host}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Lectureseries;
