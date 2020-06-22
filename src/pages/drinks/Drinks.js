import React from "react";

import ItemsListRendering from "../../components/ItemsListRendering/ItemsListRendering";
import Footer from "../../layout/footer/Footer";
const Drinks = () => {
  return (
    <div className="u-margin-top-pages">
      <ul>
        <ItemsListRendering drinks />
      </ul>
      <Footer />
    </div>
  );
};

export default Drinks;
