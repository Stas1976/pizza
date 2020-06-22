import React from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/router";
import { signInWithGoogle } from "../../db/firebase";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input/Input";
import { auth } from "../../db/firebase";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        alert("Toks vartuotojas nerastas");
      } else if (error.code === "auth/wrong-password") {
        alert("netesingas slaptažodis");
      } else {
        alert(error.message);
      }
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="confirmation">
        <h2 className="confirmation__header">Prisijungti</h2>
        <form className="confirmation__form" onSubmit={this.handleSubmit}>
          <Input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            required
          >
            Jūsų el. paštas
          </Input>
          <Input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            required
          >
            slaptažodis
          </Input>
          <Button type="submit" middle disabled={isInvalid}>
            Prisijungti
          </Button>
        </form>
        <Button clicked={signInWithGoogle} google>
          Google
        </Button>

        <h3 style={{ marginTop: "3rem" }}>
          Dar neturite paskyros?
          <p className="confirmation__header">
            <Link to={ROUTES.SIGN_UP}>Registruotis</Link>
          </p>{" "}
        </h3>
      </div>
    );
  }
}

export default withRouter(SignIn);
