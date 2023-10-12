import menuButton from "/assets/icon-menu.svg";
import logo from "/assets/logo.svg";
import cart from "/assets/icon-cart.svg";
import avatar from "/assets/image-avatar.png";
import CartInformation from "./CartInformation";
import MobileMenu from "./MobileMenu";

import { useState } from "react";

interface props {
  numOfCouple: number;
  cartNotification: number;
  setCartNotification: (value: number) => void;
}

export default function Header(props: props) {
  const [cartClick, setCartClick] = useState(false);
  const cartHandleClick = () => {
    setCartClick(!cartClick);
  };
  const [menuClick, setMenuClick] = useState(false);
  const menuHandleClick = () => {
    setMenuClick(true);
  };

  return (
    <header className="flex items-center justify-between pt-5 pb-7 px-6 relative md:pt-0 md:px-0 md:pb-[49px] md:border-solid md:border-b-[1px]">
      {menuClick === true ? (
        <MobileMenu menuClick={menuClick} setMenuClick={setMenuClick} />
      ) : null}
      <div className="flex items-center gap-4 md:gap-14">
        <img
          src={menuButton}
          alt="menuButton"
          onClick={menuHandleClick}
          className="md:hidden"
        />
        <img src={logo} alt="logo" className="cursor-pointer" />
        <div>
          <ul className="flex gap-8 items-center text-[#69707D] text-[15px] max-[767px]:hidden">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 md:gap-8">
        <div className="relative cursor-pointer" onClick={cartHandleClick}>
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
        <img src={avatar} alt="avatar" className="w-6 md:w-[50px]" />
      </div>
      {cartClick ? (
        <CartInformation
          cartNotification={props.cartNotification}
          setCartNotification={props.setCartNotification}
        />
      ) : null}
    </header>
  );
}
