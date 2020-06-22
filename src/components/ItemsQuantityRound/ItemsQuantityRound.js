import React from "react";
import { connect } from "react-redux";

const ItemsQuantityRound = ({ cart }) => {
  const itemsQuantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return <div className="items-quntity-round">{itemsQuantity}</div>;
};

const mapStateToProps = state => {
  return { cart: state.itemCartReducer.cart };
};

export default connect(mapStateToProps)(ItemsQuantityRound);
