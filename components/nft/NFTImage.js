import { IoMdSnow } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

const NFTImage = ({ selectedNft }) => {
  return (
    <div className="container-fluid">
      <div className="card mt-4">
        {console.log(selectedNft, '🎆')}
        <img className="image" src={selectedNft?.image} alt="" />
        <div className="carousel-caption pt-5">
          <IoMdSnow />
          <AiOutlineHeart />
          2.3K
          <img
            src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
            alt="eth"
            className="img"
            height="24"
            width="30"
          />
        </div>
      </div>
    </div>
  );
};

export default NFTImage;
