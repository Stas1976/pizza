import React from "react";
// import { CSSTransition } from "react-transition-group";

import ItemsListRendering from "../../components/ItemsListRendering/ItemsListRendering";
import Footer from "../../layout/footer/Footer";

const Snacks = () => {
  return (
    <div className="snacks u-margin-top-pages">
      <ul>
        <ItemsListRendering snacks />
      </ul>
      <Footer />
    </div>
  );
};

export default Snacks;
