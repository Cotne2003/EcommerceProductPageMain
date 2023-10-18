import close from "/assets/icon-close.svg";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  menuClick: boolean;
  setMenuClick: (value: boolean) => void;
}

export default function MobileMenu(props: props) {
  const menuHandleClick = () => {
    props.setMenuClick(false);
  };
  return (
    <AnimatePresence>
      {props.menuClick && (
        <motion.div
          className="fixed left-0 top-0 z-50 w-full h-[100vh] bg-[rgba(0,0,0,0.75)] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[60%] bg-white z-50 pl-[25px] h-full pt-1"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ stiffness: 0 }}
            exit={{ x: "-100vw" }}
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
