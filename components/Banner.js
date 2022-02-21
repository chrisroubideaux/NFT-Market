import React from 'react';
import Profile from './Profile';

function Banner() {
  return (
    <div className="banner py-5">
      <div className="container">
        <h3>Hottest NFTs on the Market</h3>
        <Profile />
      </div>
    </div>
  );
}

export default Banner;
