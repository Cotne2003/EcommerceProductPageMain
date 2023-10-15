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
    <header className="flex items-center justify-between pb-7 pt-5 px-6 relative lg:pt-0 lg:px-0 lg:pb-[0px] lg:border-solid lg:border-b-[1px]">
      {menuClick === true ? (
        <MobileMenu menuClick={menuClick} setMenuClick={setMenuClick} />
      ) : null}
      <div className="flex items-center gap-4 lg:gap-14">
        <img
          src={menuButton}
          alt="menuButton"
          onClick={menuHandleClick}
          className="lg:hidden"
        />
        <img src={logo} alt="logo" className="cursor-pointer" />
        <div>
          <ul className="flex gap-8 items-center text-[#69707D] text-[15px] max-[1023px]:hidden">
            <li className="duration-300 ease-in-out py-[30px] hover:border-b-[#FF7E1B] hover:border-b-solid hover:border-b-4 hover:text-[#1D2026] border-b-solid border-b-4 border-b-white">
              Collections
            </li>
            <li className="duration-300 ease-in-out py-[30px] hover:border-b-[#FF7E1B] hover:border-b-solid hover:border-b-4 hover:text-[#1D2026] border-b-solid border-b-4 border-b-white">
              Men
            </li>
            <li className="duration-300 ease-in-out py-[30px] hover:border-b-[#FF7E1B] hover:border-b-solid hover:border-b-4 hover:text-[#1D2026] border-b-solid border-b-4 border-b-white">
              Women
            </li>
            <li className="duration-300 ease-in-out py-[30px] hover:border-b-[#FF7E1B] hover:border-b-solid hover:border-b-4 hover:text-[#1D2026] border-b-solid border-b-4 border-b-white">
              About
            </li>
            <li className="duration-300 ease-in-out py-[30px] hover:border-b-[#FF7E1B] hover:border-b-solid hover:border-b-4 hover:text-[#1D2026] border-b-solid border-b-4 border-b-white">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 lg:gap-8">
        <div className="relative cursor-pointer" onClick={cartHandleClick}>
          <img src={cart} alt="cart" className="w-6" />
          <span
            className={
              props.cartNotification === 0
                ? `hidden`
                : `bg-[#FF7E1B] text-white text-[10px] rounded-lg w-[19px] flex justify-center items-center absolute top-[-3px] right-[-3px]`
            }
          >
            {props.cartNotification}
          </span>
        </div>
        <img src={avatar} alt="avatar" className="w-6 lg:w-[50px]" />
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
