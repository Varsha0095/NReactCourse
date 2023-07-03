import { useSelector } from "react-redux/es/hooks/useSelector";
// import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearItem } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearItem());
  }

  return (
    <div>
      <h1 className="p-2 m-5 text-2xl font-bold">
        Cart Items - {cartItems.length}
      </h1>
      <div className="p-2 m-5 font-semibold bg-amber-200">{cartItems}</div>
      <div>
        <button onClick={() => clearCartHandler()} className="p-2 m-2 bg-gray-300 font-semibold border-2 border-amber-200 w-auto">
          Clear Cart
        </button>
      </div>
      {/* <FoodItem {...cartItems} /> */}
    </div>
  );
};

export default Cart;
