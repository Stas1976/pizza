import React from "react";
// import { Link, withRouter } from "react-router-dom";

// import * as ROUTES from "../../constants/router";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Input/Input";
import { auth, createUserProfileDocument } from "../../db/firebase";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    passwordOne: "",
    passwordTwo: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, passwordOne, passwordTwo } = this.state;

    if (passwordOne !== passwordTwo)
      return alert("Jūsų slaptažodžia nesutampa");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        passwordOne
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({ name: "", email: "", passwordOne: "", passwordTwo: "" });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/weak-password") {
        alert("Jūsų slaptažodis turi buti bent iš 6 simbolių");
      } else if (error.code === "auth/invalid-email") {
        alert("Netesingas el. paštas!");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Toks vartuotojas jau yra užsiregistravęs");
      } else if (error.code) {
        alert(error);
      } else {
        alert(error.mesage);
      }
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, passwordOne, passwordTwo, displayName } = this.state;
    const isInvalid = displayName === "" || email === "" || passwordOne === "";
    // passwordOne !== passwordTwo;

    return (
      <div className="confirmation">
        <h2 className="confirmation__header">Prisijungti</h2>
        <form className="confirmation__form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
          >
            Jūsų vardas
          </Input>
          <Input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          >
            Jūsų el. paštas
          </Input>
          <Input
            type="password"
            value={passwordOne}
            name="passwordOne"
            onChange={this.handleChange}
          >
            slaptažodis
          </Input>
          <Input
            type="password"
            value={passwordTwo}
            name="passwordTwo"
            onChange={this.handleChange}
          >
            pakartuoti slaptažodį
          </Input>
          <Button type="submit" disabled={isInvalid} middle>
            Registruotis
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
