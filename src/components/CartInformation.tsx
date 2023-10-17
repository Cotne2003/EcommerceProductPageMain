import product from "/assets/image-product-1-thumbnail.jpg";
import remove from "/assets/icon-delete.svg";

interface props {
  cartNotification: number;
  setCartNotification: (value: number) => void;
  cartClick: boolean;
  setCartClick: (value: boolean) => void;
}

export default function CartInformation(props: props) {
  const removeHandleClick = () => {
    props.setCartNotification(0);
  };

  const checkoutHandleClick = () => {
    props.setCartClick(!props.cartClick);
    props.setCartNotification(0);
  };

  return (
    <div className="absolute bottom-[-265px] right-2 z-50 bg-white w-[360px] rounded-[10px] h-[256px] shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.50)]">
      <div className="py-6 pl-6 border-b-[1px] border-[#E4E9F2]">
        <h2 className="text-[#1D2026] text-[16px] font-bold">Cart</h2>
      </div>
      {props.cartNotification === 0 ? (
        <div className="flex justify-center items-center h-[182px]">
          <p className="text-[#69707D] font-bold">Your cart is empty.</p>
        </div>
      ) : (
        <div className="px-6 mt-6">
          <div className="flex justify-between items-center">
            <img src={product} alt="" className="w-[50px] rounded-[4px]" />
            <div>
              <p className="text-[#69707D]">Fall Limited Edition Sneakers</p>
              <p className="text-[#69707D] flex gap-2">
                $125.00 x {props.cartNotification}
                <span className="text-[#1D2026] text-[16px] font-bold">
                  {`$${props.cartNotification * 125}`}
                </span>
              </p>
            </div>
            <img
              src={remove}
              alt=""
              onClick={removeHandleClick}
              className="cursor-pointer"
            />
          </div>
          <button
            className="w-full py-5 bg-[#FF7E1B] rounded-[10px] mt-6 text-[#fff] text-base active:bg-[#FFAB6A]"
            onClick={checkoutHandleClick}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
