import React from "react";

const Input = ({ children, name, onChange, value, textarea, type }) => {
  return (
    <div>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          placeholder={children}
          className="inputs__input"
          onChange={onChange}
          cols="30"
          rows="4"
        >
          {children}
        </textarea>
      ) : (
        <div className="inputs">
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            placeholder={children}
            className="inputs__input"
            required
            onChange={onChange}
          />
          <label fot={name} className="inputs__label">
            {children}
          </label>
        </div>
      )}
    </div>
  );
};

export default Input;
