import Carousel from "./Carousel";
import minus from "/assets/icon-minus.svg";
import plus from "/assets/icon-plus.svg";
import cart from "/assets/icon-cart-white.svg";

interface props {
  numOfCouple: number;
  setNumOfCouple: (value: number) => void;
  cartNotification: number;
  setCartNotification: (value: number) => void;
}

export default function Main(props: props) {
  const plusNumOfCouple = () => {
    props.setNumOfCouple(props.numOfCouple + 1);
    if (props.numOfCouple === 10) {
      props.setNumOfCouple(props.numOfCouple);
    }
  };
  const minusNumOfCouple = () => {
    props.setNumOfCouple(props.numOfCouple - 1);
    if (props.numOfCouple === 0) {
      props.setNumOfCouple(props.numOfCouple);
    }
  };
  return (
    <main className="w-[375px] mx-auto md:mx-0 md:mt-[90px] md:flex md:justify-center md:w-full md:gap-[5%]">
      <section>
        <Carousel />
      </section>
      <section className="pt-6 px-6 md:pt-0 md:px-0 md:w-[445px]">
        <h3 className="text-[#FF7E1B] text-[12px] font-bold uppercase tracking-[1.846px] md:text-[13px] md:tracking-[2px]">
          Sneaker Company
        </h3>
        <h2 className="text-[#1D2026] text-[28px] font-bold leading-8 mt-[19px] md:mt-[27px] md:text-[44px] md:leading-[48px]">
          Fall Limited Edition Sneakers
        </h2>
        <p className="mt-[15px] text-[#69707D] leading-6 md:mt-[32px] md:text-[16px] md:leading-[26px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center justify-between mt-7 md:flex-col md:items-start">
          <div className="flex items-center gap-4">
            <span className="text-[#1D2026] text-[28px] font-bold">
              $125.00
            </span>
            <span className="text-[#FF7E1B] pt-[7px] px-2 pb-1 bg-[#FFEEE2] rounded-md font-bold">
              50%
            </span>
          </div>
          <span className="text-[#B6BCC8] text-[16px] font-bold line-through">
            $250.00
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex justify-between items-center pt-[22px] pb-[18px] px-6 bg-[#F6F8FD] rounded-[10px] md:w-[40%]">
            <img src={minus} alt="" onClick={minusNumOfCouple} />
            <span className="text-[#1D2026] text-base font-bold">
              {props.numOfCouple}
            </span>
            <img src={plus} alt="" onClick={plusNumOfCouple} />
          </div>
          <button
            className="flex justify-center gap-4 items-center py-5 bg-[#FF7E1B] rounded-[10px] shadow-[0px_20px_50px_-20px_rgba(255,126,27,1)] md:w-[60%]"
            onClick={() => {
              props.setCartNotification(props.numOfCouple);
            }}
          >
            <img src={cart} alt="" className="fill-white" />
            <p className="text-[#fff] text-base">Add to cart</p>
          </button>
        </div>
      </section>
    </main>
  );
}
