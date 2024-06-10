import React from "react";

const RowForm = ({ type, name, value, handleChange , labelText, }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-lable">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default RowForm;
