// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { CartContext } from "../../contexts/cart.context";

import { Card } from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <Card>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </Card>
  );
};

export default ProductCard;
