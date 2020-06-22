import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/router";
import * as action from "../../redux/ItemsCart/items-cart-action";
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import Popup from "../../components/PopUpAddItem/PopUpAddItem";

class AddressConfirmation extends React.Component {
  state = {
    street: "",
    houseNr: "",
    flatNr: "",
    phoneNr: "",
    comment: "",
    popup: false,
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { street, houseNr, flatNr, phoneNr, comment } = this.state;
    const { submitOrder, cart, resetCart, history } = this.props;

    submitOrder({ street, houseNr, flatNr, phoneNr, comment, cart });

    resetCart();

    this.setState({
      street: "",
      houseNr: "",
      flatNr: "",
      phoneNr: "",
      comment: "",
    });

    setTimeout(() => this.setState({ popup: true }), 1);
    setTimeout(() => this.setState({ popup: false }), 1000);
    setTimeout(() => history.push(ROUTES.PIZZA), 1200);
  };

  render() {
    const { street, houseNr, flatNr, phoneNr, comment, popup } = this.state;

    return (
      <div className="address">
        <h2 className="address__header">Kur pristatyti?</h2>
        <form onSubmit={this.handleSubmit} className="address__form">
          <div className="address__inputs">
            <Input onChange={this.handleInput} value={street} name="street">
              Gatvė:
            </Input>
            <Input onChange={this.handleInput} value={houseNr} name="houseNr">
              Namo numeris:
            </Input>
            <Input onChange={this.handleInput} value={flatNr} name="flatNr">
              Butas
            </Input>
            <Input onChange={this.handleInput} value={phoneNr} name="phoneNr">
              Telefono Nr.
            </Input>
            <Input
              name="comment"
              value={comment}
              onChange={this.handleInput}
              textarea
            >
              {" "}
              Jūsų komentaras
            </Input>
          </div>
          <Popup name="Jūsų užsakymas priimtas" pop={popup} order />
          <Button type="submit" middle>
            Patvirtinit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.itemCartReducer.cart };
};
export default connect(
  mapStateToProps,
  action
)(withRouter(AddressConfirmation));
