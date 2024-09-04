import React from "react";

const CarouselItem = ({ imgSrc, altText, year, type, rating, title }) => (
  <div className="carousel-item">
    <div className="wrapper w-[420px] h-[200px] relative bg-gray-800 rounded-xl overflow-hidden">
      <img
        src={imgSrc}
        className="w-full h-full object-cover opacity-70"
        alt={altText}
      />
      <div className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full">
        <i className="fa-regular fa-bookmark text-white"></i>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-sm">
          {year} • {type} • {rating}
        </p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  </div>
);

function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="mt-[34px] ml-9 w-[122px] h-10 font-normal text-3xl ">
        Trending
      </h2>

      <div className="carousel rounded-box container flex gap-4 ml-9 max-w-[1280px]">
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
        <CarouselItem
          imgSrc="https://picsum.photos/700/300"
          altText="Movie"
          year="2019"
          type="Movie"
          rating="PG"
          title="Beyond Earth"
        />
      </div>
    </div>
  );
}

export default Hero;
