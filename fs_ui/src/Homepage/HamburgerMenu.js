import './HamburgerMenu.css'; // Make sure to create this CSS file
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const navigate = useNavigate();
  
  const goToFindYourMovie = () => {
    navigate('/find-your-movie'); // Navigate to the "Find your movie" page
  };

  return (
    <div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <button onClick={goToFindYourMovie}>Find your movie</button>
      </div>
    </div>
  );
}

export default HamburgerMenu;
