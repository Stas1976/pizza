import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import * as ROUTERS from "../../constants/router";
import * as action from "../../redux/ItemsCart/items-cart-action";
import Button from "../Buttons/Button";

const CartOrderConfirm = ({ cart }) => {
  let history = useHistory();

  const handleHistory = () => history.push(ROUTERS.PIZZA);

  const itemsQuantity = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <div className="cart-confirm ">
      <h3 className="cart-confirm__header">
        Užsakymo suma: {itemsQuantity.toFixed(2)}€
      </h3>
      <div className="cart-confirm__btn-block">
        <Button clicked={handleHistory} middle>
          Atgal į meniu
        </Button>
        <Link to={ROUTERS.ADDRES}>
          <Button middle>Toliau</Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cart: state.itemCartReducer.cart };
};

export default connect(mapStateToProps, action)(CartOrderConfirm);
