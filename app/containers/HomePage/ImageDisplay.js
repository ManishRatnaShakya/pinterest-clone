import React from 'react';
import { useState } from 'react';
import './Style.css';
function ImageDisplay({ image }) {
  const [save, setSave] = useState(false);
  return (
    <div
      className="img"
      onMouseOver={() => setSave(true)}
      onMouseOut={() => setSave(false)}
    >
      <img src={image.urls.small} className="images" />
      {save ? <button className="btn">save</button> : ''}
    </div>
  );
}

export default ImageDisplay;
