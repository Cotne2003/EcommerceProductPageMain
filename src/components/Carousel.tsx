import { useState } from "react";
import product1 from "/assets/image-product-1.jpg";
import product2 from "/assets/image-product-2.jpg";
import product3 from "/assets/image-product-3.jpg";
import product4 from "/assets/image-product-4.jpg";
import previus from "/assets/icon-circle.svg";

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
          className="w-full lg:rounded-[15px]"
        />
        <img
          src={previus}
          alt=""
          className="absolute top-[45%] left-4 lg:hidden"
          onClick={imagePreviousChanger}
        />
        <img
          src={previus}
          alt=""
          className="absolute rotate-180 top-[45%] right-4 lg:hidden"
          onClick={imageNextChanger}
        />
      </div>
    </div>
  );
}
