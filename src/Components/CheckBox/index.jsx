import React from 'react';

const CheckBox = (props) => {
  const { id, name, value, onChange, onClick, checked, children } = props;
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input checkbox-t"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={id} onClick={onClick}>
        {/* Default unchecked */}
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
