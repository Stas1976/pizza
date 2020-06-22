import React from "react";

import ItemsListRendering from "../../components/ItemsListRendering/ItemsListRendering";
import Footer from "../../layout/footer/Footer";

const Deserts = () => {
  return (
    <div className=" u-margin-top-pages">
      <ul>
        <ItemsListRendering deserts />
      </ul>
      <Footer />
    </div>
  );
};

export default Deserts;
