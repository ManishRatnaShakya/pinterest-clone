import React from 'react';
import { useState } from 'react';
import './Style.css';
function ImageDisplay({ image, onSave }) {
  const [save, setSave] = useState(false);
  const saveImage = id => {};
  return (
    <div
      className="img"
      onMouseOver={() => setSave(true)}
      onMouseLeave={() => setSave(false)}
    >
      <img src={image.urls.small} className="images" />
      {save ? (
        <button className="btn" onClick={onSave}>
          save
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default ImageDisplay;
