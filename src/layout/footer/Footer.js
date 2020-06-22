import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--top">
          <div className="footer__container--works">
            <h4>Darbas</h4>
            <p>Picerijoje</p>
          </div>
          <div className="footer__container--contacts">
            <h4>skambinkite</h4>
            <h3>
              8-6xx xx xxx
              <span> info@pizza.com</span>
            </h3>
          </div>
        </div>
        <div className="footer__container--bottom">
          <h2>PIZZA EXPRESS </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
