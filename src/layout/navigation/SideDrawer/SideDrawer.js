import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const SideDrawer = ({ children }) => {
  let [position, setPosition] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temporaryPosition = window.pageYOffset;

      setVisible(position > temporaryPosition);
      setPosition(temporaryPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className={"side-drawer " + (!visible && "side-drawer--hiden")}>
      {children}
    </div>
  );
};

const mapStateToProps = state => {
  return { sideDrawer: state.navigationReducer.sideDrawer };
};

export default connect(mapStateToProps)(SideDrawer);
