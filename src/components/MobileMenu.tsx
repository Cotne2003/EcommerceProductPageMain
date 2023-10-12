import close from "/assets/icon-close.svg";

interface props {
  menuClick: boolean;
  setMenuClick: (value: boolean) => void;
}

export default function MobileMenu(props: props) {
  const menuHandleClick = () => {
    props.setMenuClick(false);
  };
  return (
    <div className="fixed left-0 top-0 flex z-50 w-full h-[100vh]">
      <div className="w-[60%] bg-white z-50 pl-[25px]">
        <img
          src={close}
          alt=""
          className="mt-[25px]"
          onClick={menuHandleClick}
        />
        <ul className="mt-14 flex flex-col gap-5 text-[#1D2026] text-[18px] font-bold">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        className="w-[40%] bg-black opacity-75"
        onClick={menuHandleClick}
      ></div>
    </div>
  );
}
