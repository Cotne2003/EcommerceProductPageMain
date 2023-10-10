import product from "/assets/image-product-1-thumbnail.jpg";
import remove from "/assets/icon-delete.svg";

interface props {
  cartNotification: number;
}

export default function CartInformation(props: props) {
  return (
    <div className="absolute bottom-[-265px] right-2 z-50 bg-white w-[360px] rounded-[10px]">
      <div className="py-6 pl-6 border-b-[1px] border-[#E4E9F2]">
        <h2 className="text-[#1D2026] text-[16px] font-bold">Cart</h2>
      </div>
      <div className="px-6 mt-6 pb-6">
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
          <img src={remove} alt="" />
        </div>
        <button className="w-full py-5 bg-[#FF7E1B] rounded-[10px] mt-6 text-[#fff] text-base">
          Checkout
        </button>
      </div>
    </div>
  );
}
