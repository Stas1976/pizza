import React, { useState, useEffect } from "react";

import NavItems from "../NavItems/NavItems";

const NavBar = () => {
  let [position, setPosition] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temprorayPosition = window.pageYOffset;

      setVisible(position > temprorayPosition);
      setPosition(temprorayPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={"navbar " + (!visible && "navbar--hiden")}>
      <NavItems />
    </div>
  );
};

export default NavBar;
