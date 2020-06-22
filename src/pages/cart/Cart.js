import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as action from "../../redux/ItemsCart/items-cart-action";

import Button from "../../components/Buttons/Button";
import shopImg from "../../img/shop.png";
import Sauce from "../../components/Sauce/Sauce";
import CartOrderConfirm from "../../components/CartOrderConfirm/CartOrderConfirm";
import Footer from "../../layout/footer/Footer";

const Cart = ({
  cart,
  deleteItemFromCart,
  removeItemFromCart,
  addOneMoreToCart
}) => {
  let itemsInCart = null;

  if (!cart.length) {
    return (
      <div className="cart">
        <div className="cart__main-container">
          <img className="cart__shop-img" src={shopImg} alt="shop" />
          <div>
            <h4>Oj, tuščia!</h4>
            <p>Pas mus pristatymas visada nemokamas,</p>
            <p>
              tačiau minimali užsakymo suma turi būti{" "}
              <span style={{ fontWeight: "700" }}>8,50 €</span>
            </p>
          </div>
        </div>
        <div className="cart__sub-container">
          <Footer />
        </div>
      </div>
    );
  } else {
    itemsInCart = (
      <TransitionGroup>
        {cart.map(item => (
          <CSSTransition
            key={item.id}
            timeout={300}
            classNames="cart__transition"
          >
            <li className="cart__list" key={item.id}>
              <img className="cart__img" src={item.imgUrl} alt={item.name} />
              <div className="cart__info">
                <h3>{item.name}</h3>
                <h4>{item.price}€</h4>
                <div>
                  {item.pizzaSize === "small"
                    ? "25cm"
                    : item.pizzaSize === "medium"
                    ? "30cm"
                    : item.pizzaSize === "large"
                    ? "35cm"
                    : null}
                </div>
                <div className="cart__btn-block">
                  <Button clicked={() => addOneMoreToCart(item.id)} cart>
                    +
                  </Button>
                  <div className="cart__quantity">{item.quantity}</div>
                  <Button clicked={() => removeItemFromCart(item.id)} cart>
                    -
                  </Button>
                </div>
              </div>
              <i
                onClick={() => deleteItemFromCart(item.id)}
                className="fas fa-trash-alt fa-2x cart__trash"
              ></i>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
  return (
    <div className="cart u-margin-top-pages-large">
      <div className="cart__main-container">
        <h3>Krepšelis</h3>
        <ul className="cart__container">{itemsInCart}</ul>
        <Sauce />
      </div>
      <div className="cart__sub-container">
        <CartOrderConfirm />
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { cart: state.itemCartReducer.cart };
};

export default connect(mapStateToProps, action)(Cart);
