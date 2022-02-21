import { CgArrowsExchangeV } from 'react-icons/cg';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useState } from 'react';
import { dummyEvents } from '../../static/dummyEvents';
import EventItem from './itemActivity/EventItem';

const ItemActivity = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <div className="btn btn-lg" onClick={() => setToggle(!toggle)}>
        <span>
          <CgArrowsExchangeV className="social-icons" />
        </span>
        Item Activity
        <div className="btn btn-sm">
          {toggle ? (
            <AiOutlineUp className="social-icons" />
          ) : (
            <AiOutlineDown className="social-icons" />
          )}
        </div>
      </div>
      {toggle && (
        <div className="form text-center">
          <AiOutlineDown className="social-icons" />

          <h4>Event</h4>
          <h4>Price</h4>
          <h4>From</h4>
          <h4>To</h4>
          <h4>Date</h4>

          {dummyEvents.map((event, id) => (
            <EventItem key={id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemActivity;
