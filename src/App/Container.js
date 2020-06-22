import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";

import Pizza from "../pages/Pizzas/Pizzas";
import Snacks from "../pages/Snacks/Snacks";
import Drinks from "../pages/drinks/Drinks";
import Deserts from "../pages/deserts/Deserts";
import Cart from "../pages/cart/Cart";
import Addres from "../pages/AddresConfirmation/AddresConfirmation";
import SignIn from "../auth/SignIn/SignIn";
import SignUp from "../auth/SignUp/SignUp";

import * as ROUTES from "../constants/router";

const Container = () => {
  let location = useLocation();

  return (
    <>
      <TransitionGroup className="router-transition">
        <CSSTransition
          key={location.pathname}
          timeout={{ enter: 300, exit: 300 }}
          classNames="router-transition__csstransition"
        >
          <section className="router-transition__section">
            <Switch location={location}>
              <Route exact path={ROUTES.PIZZA} component={Pizza} />
              <Route path={ROUTES.SNACKS} component={Snacks} />
              <Route path={ROUTES.DRINKS} component={Drinks} />
              <Route path={ROUTES.DESERTS} component={Deserts} />
              <Route path={ROUTES.CART} component={Cart} />
              <Route path={ROUTES.ADDRES} component={Addres} />
              <Route path={ROUTES.SIGN_IN} component={SignIn} />
              <Route path={ROUTES.SIGN_UP} component={SignUp} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default withRouter(Container);
