import React, { useState } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
// import { CSSTransition } from "react-transition-group";

import * as action from "../../redux/ItemsCart/items-cart-action";
// import Info from "../Info/Info";
import Button from "../Buttons/Button";
import PopupAddItem from "../PopUpAddItem/PopUpAddItem";

const ItemCard = ({
  cardItem,
  selectedPizza,
  toggleModalOn,
  addItemToCart
}) => {
  const [popup, handlePopup] = useState(false);
  const [itemName, handleName] = useState("");
  // const [infoPopup, handleInfoPopup] = useState(false);

  if (popup) {
    setTimeout(() => handlePopup(false), 1000);
  }

  const menuItemTitle = cardItem.title;

  let pizza = false;
  if (menuItemTitle === "Picos") {
    pizza = true;
  }

  const menuItems = cardItem.items.map(item => (
    <li
      key={item.name}
      className={
        pizza ? `item-card__item item-card__item--pizza` : `item-card__item`
      }
    >
      {item.name}
      {/* {!pizza && (
        <Info
          infoPopup={infoPopup}
          clicked={() => handleInfoPopup(!infoPopup)}
        />
      )} */}
      <img
        src={item.imgUrl}
        alt={`${item.name} ${menuItemTitle}`}
        className="item-card__image"
      />
      <div className="item-card__ingredients">{item.ingredients}</div>
      {pizza ? (
        <>
          <div>Kaina nuo: {item["small"].price}€</div>
          <Button
            pizza={pizza}
            clicked={() => {
              toggleModalOn();
              selectedPizza(item);
            }}
          />
        </>
      ) : (
        <div className="item-card__price-block">
          <h3>Kaina: {item.price}€</h3>
          <Button
            clicked={() => {
              addItemToCart({
                name: item.name,
                type: "item",
                price: item.price,
                imgUrl: item.imgUrl,
                id: uniqid()
              });
              handlePopup(true);
              handleName(item.name);
            }}
          />
        </div>
      )}
    </li>
  ));

  return (
    <div className="item-card">
      <h2 className="item-card__header">{menuItemTitle}</h2>
      <PopupAddItem name={itemName} pop={popup} />
      <ul className="item-card__list">{menuItems}</ul>
    </div>
  );
};

// const mapStateToProps = state => {
//   const { infoComponentState } = state.itemCartReducer;
//   return {
//     info: infoComponentState
//   };
// };

export default connect(null, action)(ItemCard);
