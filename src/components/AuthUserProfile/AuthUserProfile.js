import React from "react";
import { connect } from "react-redux";

const AuthUserProfile = ({ user }) => {
  if (!user.photoURL) {
    const spliceName = user.displayName.slice(0, 2);
    return (
      <div className="auth-user-profile">
        <div className="auth-user-profile__without-img">{spliceName}</div>
      </div>
    );
  } else {
    return (
      <div className="auth-user-profile">
        <img
          className="auth-user-profile__img"
          src={user.photoURL}
          alt="user"
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { user: state.authReducer.user.currentUser };
};

export default connect(mapStateToProps)(AuthUserProfile);
