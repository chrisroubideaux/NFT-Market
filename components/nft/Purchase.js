import { useEffect, useState } from 'react';
import { HiTag } from 'react-icons/hi';
import { IoMdWallet } from 'react-icons/io';
import toast, { Toaster } from 'react-hot-toast';
import { ButtonGroup } from 'react-bootstrap';
const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
  const [selectedMarketNft, setSelectedMarketNft] = useState();
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if (!listings || isListed === 'false') return;
    (async () => {
      setSelectedMarketNft(
        listings.find((marketNft) => marketNft.asset?.id === selectedNft.id)
      );
    })();
  }, [selectedNft, listings, isListed]);

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return;

    setEnableButton(true);
  }, [selectedMarketNft, selectedNft]);

  const confirmPurchase = (toastHandler = toast) =>
    toastHandler.success(`Purchase successful!`, {
      style: {
        background: '#04111d',
        color: '#fff',
      },
    });

  const buyItem = async (
    listingId = selectedMarketNft.id,
    quantityDesired = 1,
    module = marketPlaceModule
  ) => {
    console.log(listingId, quantityDesired, module, 'david');

    await module
      .buyoutDirectListing({
        listingId: listingId,
        quantityDesired: quantityDesired,
      })
      .catch((error) => console.error(error));

    confirmPurchase();
  };

  return (
    <div className="container py-5">
      <Toaster position="bottom-left" reverseOrder={false} />
      {isListed === 'true' ? (
        <>
          <div
            onClick={() => {
              enableButton ? buyItem(selectedMarketNft.id, 1) : null;
            }}
            className="btn btn-md"
          >
            <IoMdWallet className="social-icon" />
            Buy Now
          </div>

          <div className="btn btn-md ">
            <HiTag className="social-icon" /> Make Offer
          </div>
        </>
      ) : (
        <div className="btn btn-md">
          <IoMdWallet className="social-icon" />
          List Item
        </div>
      )}
    </div>
  );
};

export default MakeOffer;
