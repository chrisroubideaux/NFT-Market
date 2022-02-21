import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="container py-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className=" w-100 img"
              src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?cs=srgb&dl=pexels-ezequiel-da-silva-2902536.jpg&fm=jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>This weeks top NFTs</h3>
              <p className="par">Check out this weeks top selling NFTs.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100 img"
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Showcase your best work</h3>
              <p className="par">
                Create, mint and list your NfT to marketplace.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" w-100 img"
              src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?cs=srgb&dl=pexels-pixabay-60504.jpg&fm=jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Security, what scams to lookout for</h3>
              <p className="par">Buy and sell your NFTs with confidance.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
