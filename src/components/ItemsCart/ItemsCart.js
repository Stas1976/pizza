import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import * as ROUTES from "../../constants/router";
import { offSideDrawer } from "../../redux/navigation/navigationAction";
import { toggleModalOff } from "../../redux/ItemsCart/items-cart-action";

const ItemsCart = ({ cart, offSideDrawer, toggleModalOff }) => {
  const itemsQuantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <CSSTransition
      in={itemsQuantity > 0 ? true : false}
      classNames="items-cart"
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      <Link
        onClick={() => {
          offSideDrawer();
          toggleModalOff();
        }}
        to={ROUTES.CART}
        className="items-cart"
      >
        <i className="fas fa-shopping-cart fa-3x items-cart__cart"></i>
        <div className="items-cart__quantity">{itemsQuantity}</div>
      </Link>
    </CSSTransition>
  );
};

const mapStateToProps = state => {
  return { cart: state.itemCartReducer.cart };
};
export default connect(mapStateToProps, { offSideDrawer, toggleModalOff })(
  ItemsCart
);
