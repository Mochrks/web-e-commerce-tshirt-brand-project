import { btnCart } from "../assets";

const BtnCart = ({ styles }) => (
  <img
    src={btnCart}
    alt="btn start"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

export default BtnCart;
