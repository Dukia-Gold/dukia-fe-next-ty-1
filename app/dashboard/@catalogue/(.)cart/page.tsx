import Cart from "@/components/dashboardComponents/cartComponents/Cart";

const CartModal = () => {
  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center transition-opacity duration-300">
      <Cart />
    </div>
  );
};

export default CartModal;
