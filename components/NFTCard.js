import { useEffect, useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import Router from 'next/router';

const NFTCard = ({ nftItem, title, listings }) => {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id);
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }
  }, [listings, nftItem]);

  return (
    <>
      <div
        className=""
        onClick={() => {
          Router.push({
            pathname: `/nfts/${nftItem.id}`,
            query: { isListed: isListed },
          });
        }}
      >
        {isListed && (
          <div className="card mt-4">
            <img className="img" src={nftItem.image} alt="eth" />
            <div className="carousel-caption pt-5">
              <h4 className="mt-3">{nftItem.name}</h4>
              <h5 className="pt-5"> {price}</h5>
              <span>
                <BiHeart />
              </span>
              {nftItem.likes}
              <img
                src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                alt="eth"
                className=""
                height="24"
                width="30"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NFTCard;
