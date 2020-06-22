import React from "react";

const Button = ({
  pizza,
  clicked,
  cart,
  children,
  middle,
  disabled,
  google
}) => {
  return (
    <div className="custtom-btn">
      {pizza ? (
        <button onClick={clicked} className="custtom-btn__btn">
          Pasirinkti
        </button>
      ) : cart ? (
        <button onClick={clicked} className="custtom-btn__btn--cart">
          {children}
        </button>
      ) : middle ? (
        <button
          onClick={clicked}
          disabled={disabled}
          className="custtom-btn__btn--middle"
        >
          {children}
        </button>
      ) : google ? (
        <button
          onClick={clicked}
          disabled={disabled}
          className="custtom-btn__btn--google"
        >
          {children}
        </button>
      ) : (
        <button onClick={clicked} className="custtom-btn__btn">
          Į krepšelį
        </button>
      )}
    </div>
  );
};

export default Button;
