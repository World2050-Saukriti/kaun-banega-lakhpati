import React, { useState } from 'react';
import { FaSyncAlt, FaUserFriends } from 'react-icons/fa'; // FontAwesome Icons
import { TbRewindBackward50 } from "react-icons/tb";
import { AiOutlineClose } from 'react-icons/ai'; // Icon for the red cross
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const LifelineButtons = () => {
  const [usedLifelines, setUsedLifelines] = useState({
    fiftyFifty: false,
    flipQuestion: false,
    companion: false
  });

  const buttonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#4CAF50', // Green background
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '28px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '20px', // Adds space between the buttons
    position: 'relative'
  };

  const hoverStyle = {
    backgroundColor: '#45a049', // Darker green on hover
  };

  const crossedIconStyle = {
    position: 'absolute',
    top: '5px',
    left: '5px',
    color: 'red',
    fontSize: '50px',
  };

  const handleLifelineClick = (lifeline) => {
    setUsedLifelines((prev) => ({
      ...prev,
      [lifeline]: true
    }));
  };

  return (
    <div className="pt-5" style={{
      position: "absolute",
      bottom: "0",
      left: "20.5%",
      height: "10vh",
      width: "25%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      opacity: "0.9",
      zIndex:"100"
    }}>
      <Tooltip id="my-tooltip" />
      <div style={{ display: 'flex' }}>
        {/* Fifty-Fifty Button */}
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
          onClick={() => handleLifelineClick('fiftyFifty')}
          disabled={usedLifelines.fiftyFifty}
          data-tooltip-id="my-tooltip" data-tooltip-content="Fifty-Fifty"
        >
          {usedLifelines.fiftyFifty ? <AiOutlineClose style={crossedIconStyle} /> : null}
          <TbRewindBackward50 />
        </button>

        {/* Flip the Question Button */}
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
          onClick={() => handleLifelineClick('flipQuestion')}
          disabled={usedLifelines.flipQuestion}
          data-tooltip-id="my-tooltip" data-tooltip-content="Flip the Question"
        >
          {usedLifelines.flipQuestion ? <AiOutlineClose style={crossedIconStyle} /> : null}
          <FaSyncAlt />
        </button>

        {/* Companion Button */}
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
          onClick={() => handleLifelineClick('companion')}
          disabled={usedLifelines.companion}
          data-tooltip-id="my-tooltip" data-tooltip-content="Companion"
        >
          {usedLifelines.companion ? <AiOutlineClose style={crossedIconStyle} /> : null}
          <FaUserFriends />
        </button>
      </div>
    </div>
  );
};

export default LifelineButtons;
