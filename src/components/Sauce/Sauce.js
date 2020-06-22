import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/ItemsCart/items-cart-action";
import uniqid from "uniqid";

import { db } from "../../db/db";
import Button from "../../components/Buttons/Button";

const Sauce = ({ addItemToCart }) => {
  const sauces = db.filter(item => item.title === "Padažai");
  const sauce = sauces[0].items.map(item => (
    <li className="sauce__item" key={item.id}>
      <div className="sauce__info">
        <img className="sauce__info--img" src={item.imgUrl} alt="sauces" />
        <h4 className="sauce__info--name">
          {item.name}
          <p className="sauce__info--price">
            Kaina: <strong>{item.price}€</strong>
          </p>
        </h4>
      </div>
      <div className="sauce__item--btn">
        <Button
          clicked={() => {
            addItemToCart({
              name: item.name,
              type: "item",
              price: item.price,
              imgUrl: item.imgUrl,
              id: uniqid()
            });
          }}
          middle
        >
          Į krepšelį
        </Button>
      </div>
    </li>
  ));
  return (
    <div className="sauce">
      <h3 className="sauce__title">{sauces[0].title}</h3>
      <ul className="sauce__list">{sauce}</ul>
    </div>
  );
};

export default connect(null, action)(Sauce);
