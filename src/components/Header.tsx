import menuButton from "/assets/icon-menu.svg";
import logo from "/assets/logo.svg";
import cart from "/assets/icon-cart.svg";
import avatar from "/assets/image-avatar.png";
import CartInformation from "./CartInformation";
import { useState } from "react";

interface props {
  numOfCouple: number;
  cartNotification: number;
}

export default function Header(props: props) {
  const [cartClick, setCartClick] = useState(false);
  const cartHandleClick = () => {
    setCartClick(!cartClick);
  };

  return (
    <header className="flex items-center justify-between pt-5 pb-7 px-6 relative">
      <div className="flex items-center gap-4">
        <img src={menuButton} alt="menuButton" />
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <div className="relative" onClick={cartHandleClick}>
          <img src={cart} alt="cart" className="w-6" />
          <span
            className={
              props.cartNotification === 0
                ? `hidden`
                : `bg-[#FF7E1B] text-white text-[10px] rounded-md w-[19px] flex justify-center items-center absolute top-[-3px] right-[-3px]`
            }
          >
            {props.cartNotification}
          </span>
        </div>
        <img src={avatar} alt="avatar" className="w-6" />
      </div>
      {cartClick ? (
        <CartInformation cartNotification={props.cartNotification} />
      ) : null}
    </header>
  );
}
