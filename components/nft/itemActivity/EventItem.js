import { BsFillCartFill } from 'react-icons/bs';

const EventItem = ({ event }) => {
  return (
    <div className="card mt-4">
      <img
        src="http://pngimg.com/uploads/piggy_bank/piggy_bank_PNG97.png"
        alt="eth"
        className="image"
      />
      <div className="carousel-caption pt-5">
        <BsFillCartFill className="social-icons" />
        <h4>{event.price}</h4>
        <h4>{event.from}</h4>
        <h4>{event.to}</h4>
        <h4>{event.date}</h4>
      </div>
    </div>
  );
};

export default EventItem;
