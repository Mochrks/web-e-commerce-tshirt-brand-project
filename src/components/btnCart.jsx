import PropTypes from "prop-types";
import { btnCart } from "../assets";

const BtnCart = ({ styles }) => (
  <img
    src={btnCart}
    alt="btn start"
    className={`w-[200px] h-[180px] object-contain cursor-pointer ${styles}`}
  />
);

BtnCart.prototype = {
  styles: PropTypes.string,
};
export default BtnCart;
