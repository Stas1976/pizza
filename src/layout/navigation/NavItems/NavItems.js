import React from "react";
import { connect } from "react-redux";

import * as ROUTES from "../../../constants/router";
import NavItem from "../NavItem/NavItem";
import ItemsQuantityRound from "../../../components/ItemsQuantityRound/ItemsQuantityRound";
import { auth } from "../../../db/firebase";
import * as action from "../../../redux/auth/auth-action";
import AuthUser from "../../../components/AuthUserProfile/AuthUserProfile";

const NavBar = ({ cart, user, signOut }) => {
  return (
    <div className="navbar__container">
      <ul className="navbar__list">
        <NavItem exact link={ROUTES.PIZZA}>
          picos
        </NavItem>
        <NavItem link={ROUTES.SNACKS}>užkandžiai</NavItem>
        <NavItem link={ROUTES.DRINKS}>gėrimai</NavItem>
        <NavItem link={ROUTES.DESERTS}>desertai</NavItem>
        <NavItem link={ROUTES.CART}>
          krepšelis
          {cart.length > 0 && <ItemsQuantityRound />}
        </NavItem>
        {user ? (
          <div>
            <div
              className="navbar__item"
              onClick={() => {
                auth.signOut();
                signOut();
              }}
            >
              Atsijungti
            </div>
            <AuthUser />
          </div>
        ) : (
          <NavItem link={ROUTES.SIGN_IN}>prisijungti</NavItem>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { cart: state.itemCartReducer.cart, user: state.authReducer.user };
};

export default connect(mapStateToProps, action)(NavBar);
