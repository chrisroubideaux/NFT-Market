import React from 'react';
import Image from 'next/image';
import nft from '../assets/nft.png';

function Card() {
  return (
    <div className="container">
      <h4 className="text-center pt-4">Collection</h4>

      <div className="card text-center mt-4">
        <Image className="img" src={nft} alt="" />

        <div className="carousel-caption pt-5">
          <h5 className="pt-5">Create</h5>
          <img
            src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
            alt="eth"
            className=""
            height="24"
            width="30"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
