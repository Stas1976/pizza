import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import NavItems from "../NavItems/NavItems";
import TopNavigationBar from "../TopNavigationBar/TopNavigationBar";
import BurgerButton from "../../../components/BurgerButtons/BurgerButtons";
import SideDrawer from "../SideDrawer/SideDrawer";
import ItemsCart from "../../../components/ItemsCart/ItemsCart";
import * as ROUTES from "../../../constants/router";

const Header = ({ sideDrawer }) => {
  let location = useLocation();

  return (
    <div className="navigation-header">
      <BurgerButton />
      <TopNavigationBar />
      {location.pathname === ROUTES.CART ||
      location.pathname === ROUTES.ADDRES ? null : (
        <ItemsCart />
      )}

      <CSSTransition
        in={sideDrawer}
        timeout={{ enter: 300, exit: 300 }}
        classNames="side-drawer"
        unmountOnExit
        mountOnEnter
      >
        <SideDrawer>
          <NavItems />
        </SideDrawer>
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = state => {
  return { sideDrawer: state.navigationReducer.sideDrawer };
};

export default connect(mapStateToProps)(Header);
