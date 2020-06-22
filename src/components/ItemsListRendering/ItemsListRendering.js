import React from "react";
import { db } from "../../db/db";
import {
  PIZZA,
  SNACKS,
  DESERTS,
  DRINKS,
  SAUCE
} from "../../constants/constantas";

import ItemCard from "../ItemCard/ItemCard";

const ItemsListRendering = ({ pizza, snacks, deserts, drinks, sauce }) => {
  let cardItem = null;

  if (pizza) {
    cardItem = db[PIZZA];
  }
  if (snacks) {
    cardItem = db[SNACKS];
  }
  if (deserts) {
    cardItem = db[DESERTS];
  }
  if (drinks) {
    cardItem = db[DRINKS];
  }
  if (sauce) {
    cardItem = db[SAUCE];
  }

  return <ItemCard cardItem={cardItem} />;
};

export default ItemsListRendering;
