import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import ItemsListRendering from "../../components/ItemsListRendering/ItemsListRendering";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";
import Footer from "../../layout/footer/Footer";

const Pizzas = ({ modalState }) => {
  return (
    <div>
      <CSSTransition
        in={modalState}
        timeout={{ enter: 300, exit: 300 }}
        classNames="backdrop"
        mountOnEnter
        unmountOnExit
      >
        <Backdrop />
      </CSSTransition>
      <CSSTransition
        in={modalState}
        timeout={{ enter: 300, exit: 300 }}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <Modal />
      </CSSTransition>
      <div className="pizza u-margin-top-pages">
        <ItemsListRendering pizza />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return { modalState: state.itemCartReducer.modalState };
};

export default connect(mapStateToProps)(Pizzas);
