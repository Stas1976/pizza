import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../layout/navigation/Header/Header";
import Container from "./Container";
import { auth, createUserProfileDocument } from "../db/firebase";
import * as action from "../redux/auth/auth-action";
import * as ROUTES from "../constants/router";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser, history } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          setUser(this.state);
          history.push(ROUTES.PIZZA);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Container />
      </div>
    );
  }
}

export default connect(null, action)(withRouter(App));
