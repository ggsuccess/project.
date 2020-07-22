import React from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleshow] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo Netflix.png"
        alt="netflix logo"
      />
      <img
        className="nav-avatar"
        src="https://pbs.twimg.com/profile_images/12401199990411550720/hBEe3tdn 400x400.png"
        alt="netflix logo"
      />
    </div>
  );
};

export default Nav;
