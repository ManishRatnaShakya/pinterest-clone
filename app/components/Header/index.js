import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import './Style.css';
function Header() {
  return (
    <div className="navbar">
      <a>
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
      </a>
      <a className="home">Home</a>
      <a>Following</a>
      <div className="search">
        <div className="search-bar">
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <a>
        <img
          className="icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXrDYIdCrdQoXJZCETkOEUsuKoAo-DfJ14A&usqp=CAU"
        />
      </a>
      <a>
        <img
          className="icon"
          src="https://www.pngitem.com/pimgs/m/150-1509059_message-icon-png-image-free-download-searchpng-grey.png"
          alt="no "
        />
      </a>
      <a>
        <img
          className="icon"
          src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
        />
      </a>
    </div>
  );
}

export default Header;
