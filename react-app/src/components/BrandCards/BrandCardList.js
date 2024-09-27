import React from 'react';
import BrandCard from './BrandCard';

export default function BrandCardList() {
  const brands = [
    {
      brandName: 'Rayfield',
      imgUrl:
        'https://cybervana.s3.us-west-1.amazonaws.com/rayfieldaerondightguinevre.jpg',
      navigateTo: '/vehicles/brand/rayfield',
    },
    {
      brandName: 'Thornton',
      imgUrl:
        'https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbylittlemule.jpg',
      navigateTo: '/vehicles/brand/thornton',
    },
    {
      brandName: 'Quadra',
      imgUrl:
        'https://cybervana.s3.us-west-1.amazonaws.com/quadratype66avenger.jpg',
      navigateTo: '/vehicles/brand/quadra',
    },
    {
      brandName: 'Mizutani',
      imgUrl:
        'https://cybervana.s3.us-west-1.amazonaws.com/mizutanishioncoyotered.jpg',
      navigateTo: '/vehicles/brand/mizutani',
    },
  ];

  return (
    <div className="parent-container">
      <div className="header-container">
        <h2 className="text-center">Browse Popular Makes</h2>
      </div>
      <div
        id="brandcard-parent-container"
        className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 my-4"
      >
        {brands.map((brand) => (
          <BrandCard
            key={brand.brandName}
            brandName={brand.brandName}
            imgUrl={brand.imgUrl}
            navigateTo={brand.navigateTo}
          />
        ))}
      </div>
    </div>
  );
}
