import close from "/assets/close.png";

interface props {
  product1: string;
  product2: string;
  product3: string;
  product4: string;
  thumbnail1: string;
  thumbnail2: string;
  thumbnail3: string;
  thumbnail4: string;
  image: number;
  setImage: (value: number) => void;
  previous: string;
  imageNextChanger: () => void;
  imagePreviousChanger: () => void;
  clickedCarouselHandler: () => void;
}

export default function ClickedCarousel(props: props) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center">
      <div className="w-[550px] relative">
        <div className="flex justify-end mb-6">
          <img
            src={close}
            alt=""
            className="w-[20px] cursor-pointer"
            onClick={props.clickedCarouselHandler}
          />
        </div>
        <img
          src={
            props.image == 1
              ? props.product1
              : props.image == 2
              ? props.product2
              : props.image == 3
              ? props.product3
              : props.image == 4
              ? props.product4
              : ""
          }
          alt=""
          className="rounded-[15px]"
        />
        <img
          src={props.previous}
          alt=""
          className="absolute top-[40%] left-[-28px] w-14 cursor-pointer"
          onClick={props.imagePreviousChanger}
        />
        <img
          src={props.previous}
          alt=""
          className="absolute rotate-180 top-[40%] right-[-28px] w-14 cursor-pointer"
          onClick={props.imageNextChanger}
        />
        <div className="flex justify-between mt-10 px-12">
          <img
            src={props.thumbnail1}
            alt=""
            className={`w-[88px] rounded-[10px] ${
              props.image === 1
                ? "border-2 border-solid border-[#FF7E1B] opacity-60"
                : ""
            } hover:opacity-60 cursor-pointer`}
            onClick={() => props.setImage(1)}
          />
          <img
            src={props.thumbnail2}
            alt=""
            className={`w-[88px] rounded-[10px]  ${
              props.image === 2
                ? "border-2 border-solid border-[#FF7E1B] opacity-60"
                : ""
            } hover:opacity-60 cursor-pointer`}
            onClick={() => props.setImage(2)}
          />
          <img
            src={props.thumbnail3}
            alt=""
            className={`w-[88px] rounded-[10px] ${
              props.image === 3
                ? "border-2 border-solid border-[#FF7E1B] opacity-60"
                : ""
            } hover:opacity-60 cursor-pointer`}
            onClick={() => props.setImage(3)}
          />
          <img
            src={props.thumbnail4}
            alt=""
            className={`w-[88px] rounded-[10px] ${
              props.image === 4
                ? "border-2 border-solid border-[#FF7E1B] opacity-60"
                : ""
            } hover:opacity-60 cursor-pointer`}
            onClick={() => props.setImage(4)}
          />
        </div>
      </div>
    </div>
  );
}
