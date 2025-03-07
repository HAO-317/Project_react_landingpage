import React from 'react';
import './Head.css';

const Head = () => {
  const statsData = [
    { value: 127, label: 'Award Received' },
    { value: 1505, label: 'Cups of Coffee' },
    { value: 109, label: 'Projects Completed' },
    { value: 102, label: 'Happy Clients' },
  ];

  return (
    <header className="head-section">
      <div className="head-content">
        <h1>Hello There</h1>
        <h2>We are H3Studio</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
        </p>
        <div className="stats">
          {statsData.map((stat, index) => (
            <div className="stat" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>

            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Head;