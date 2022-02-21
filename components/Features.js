import React from 'react';

function Features() {
  return (
    <div className="features py-5">
      <div className="container text-center pt-5">
        <h2>Create your wallet, list and sell your NFTs</h2>
        <img
          className="mt-5"
          src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
          alt=""
          width="72"
          height="57"
        />
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-3">
            <div className=" mt-4 text-center">
              <i className="pt-4 social-icons fa-solid fa-wallet"></i>
              <h4 className="pt-2">Create Wallet</h4>

              <p>
                Create a wallet of your choosing, connect it to NFT market by
                clicking the wallet icon in the navbar.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="mt-4 text-center">
              <i className="pt-4 social-icons fa-solid fa-bookmark"></i>
              <h4 className="pt-2">Create your Collection</h4>
              <p>
                After setting up your wallet, create a profile and list your
                fees & your secondary sales fee.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className=" mt-4 text-center">
              <i className="pt-4 social-icons fa-solid fa-palette"></i>
              <h4 className="pt-2">Add your NFTs</h4>
              <p>
                Showcase your work, upload your Nft art by adding a title and
                price description, to customize your NFTs with properties.
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="mt-4 text-center">
              <i className="pt-4 social-icons fa-solid fa-comments-dollar"></i>
              <h4 className="pt-2">List your NFTs</h4>
              <p>
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
