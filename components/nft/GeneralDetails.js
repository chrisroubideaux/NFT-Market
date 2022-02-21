import { AiFillHeart } from 'react-icons/ai';
import { MdRefresh } from 'react-icons/md';
import { RiShareBoxLine } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { GiShare } from 'react-icons/gi';

const GeneralDetails = ({ selectedNft }) => {
  return (
    <div className="container-fluid">
      <h4>{selectedNft?.name}</h4>
      <AiFillHeart className="social-icons" /> 2.3K favorites
    </div>
  );
};

export default GeneralDetails;
