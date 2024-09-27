import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BrandCard({ brandName, imgUrl, navigateTo }) {
  const { push } = useHistory();

  const handleClick = () => {
    push(navigateTo);
  };

  return (
    <div className="brandcard-container" onClick={handleClick}>
      <img
        src={imgUrl}
        alt={`${brandName} vehicle`}
        className="w-full h-auto"
      />
      <p className="text-center">{brandName}</p>
    </div>
  );
}
