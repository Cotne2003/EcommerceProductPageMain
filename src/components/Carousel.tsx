import { useState } from "react";
import product1 from "/assets/image-product-1.jpg";
import product2 from "/assets/image-product-2.jpg";
import product3 from "/assets/image-product-3.jpg";
import product4 from "/assets/image-product-4.jpg";
import thumbnail1 from "/assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "/assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "/assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "/assets/image-product-4-thumbnail.jpg";
import previous from "/assets/icon-circle.svg";
import ClickedCarousel from "./ClickedCarousel";

export default function Carousel() {
  const [image, setImage] = useState(1);
  const imageNextChanger = () => {
    setImage(image + 1);
    if (image === 4) {
      setImage(1);
    }
  };
  const imagePreviousChanger = () => {
    setImage(image - 1);
    if (image === 1) {
      setImage(4);
    }
  };
  const [clickedCarousel, setClickedCarousel] = useState(false);
  const clickedCarouselHandler = () => {
    setClickedCarousel(!clickedCarousel);
  };

  return (
    <div>
      <div className="relative lg:w-[445px]">
        <img
          src={
            image == 1
              ? product1
              : image == 2
              ? product2
              : image == 3
              ? product3
              : image == 4
              ? product4
              : ""
          }
          alt=""
          className="w-full lg:rounded-[15px] cursor-pointer"
          onClick={clickedCarouselHandler}
        />
        <img
          src={previous}
          alt=""
          className="absolute top-[45%] left-4 lg:hidden"
          onClick={imagePreviousChanger}
        />
        <img
          src={previous}
          alt=""
          className="absolute rotate-180 top-[45%] right-4 lg:hidden"
          onClick={imageNextChanger}
        />
      </div>
      <div className="flex justify-between mt-8 max-[1023px]:hidden">
        <img
          src={thumbnail1}
          alt=""
          className={`w-[88px] rounded-[10px] border-2 border-solid ${
            image === 1
              ? "border-[#FF7E1B] opacity-40 hover:opacity-[0.40]"
              : ""
          } hover:opacity-60 cursor-pointer`}
          onClick={() => setImage(1)}
        />
        <img
          src={thumbnail2}
          alt=""
          className={`w-[88px] rounded-[10px] border-2 border-solid ${
            image === 2
              ? "border-[#FF7E1B] opacity-40 hover:opacity-[0.40]"
              : ""
          } hover:opacity-60 cursor-pointer`}
          onClick={() => setImage(2)}
        />
        <img
          src={thumbnail3}
          alt=""
          className={`w-[88px] rounded-[10px] border-2 border-solid ${
            image === 3
              ? "border-[#FF7E1B] opacity-40 hover:opacity-[0.40]"
              : ""
          } hover:opacity-60 cursor-pointer`}
          onClick={() => setImage(3)}
        />
        <img
          src={thumbnail4}
          alt=""
          className={`w-[88px] rounded-[10px] border-2 border-solid ${
            image === 4
              ? "border-[#FF7E1B] opacity-40 hover:opacity-[0.40]"
              : ""
          } hover:opacity-60 cursor-pointer`}
          onClick={() => setImage(4)}
        />
      </div>
      {clickedCarousel ? (
        <ClickedCarousel
          product1={product1}
          product2={product2}
          product3={product3}
          product4={product4}
          thumbnail1={thumbnail1}
          thumbnail2={thumbnail2}
          thumbnail3={thumbnail3}
          thumbnail4={thumbnail4}
          image={image}
          setImage={setImage}
          previous={previous}
          imageNextChanger={imageNextChanger}
          imagePreviousChanger={imagePreviousChanger}
          clickedCarouselHandler={clickedCarouselHandler}
        />
      ) : null}
    </div>
  );
}
