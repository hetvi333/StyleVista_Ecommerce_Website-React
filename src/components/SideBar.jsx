import React, { useContext } from "react";
import { Link } from "react-router-dom";

// cartitem
import CartItem from "./CartItem";

// import contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

// react icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full  bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-4 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag</div>
        <div
          onClick={handleClose}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[380px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center ">
          {/* total */}
          <div className=" uppercase font-semibold">
            <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>

          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4
             bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to={"/"} className=" bg-gray-200 flex py-2
         justify-center text-primary w-full font-semibold capitalize">
          View Cart
        </Link>
        <Link  to={"/"} className=" bg-primary flex py-2
         justify-center text-white w-full font-semibold">Checkout</Link>
      </div>
    </div>
  );
};

export default SideBar;
