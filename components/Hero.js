import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nft from '../assets/nft.png';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="container">
      <Row>
        <Col md={6}>
          <div className="container py-5">
            <h1>NFT Market</h1>
            <p className=" display-4 par">
              Discover, collect, and
              <br />
              sell extraordinary NFTs
            </p>

            <ButtonGroup>
              <Link href="/collections/">
                <Button className="btn btn-sm">explore</Button>
              </Link>

              <Link href="/">
                <Button className="btn btn-sm">create</Button>
              </Link>
            </ButtonGroup>
          </div>
        </Col>
        <Col md={6}>
          <div className="container ">
            <h4 className="text-center">Newest collection</h4>
            <div className="card text-center ">
              <Image className="img" src={nft} alt="" />
              <div className="carousel-caption pt-5"></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
