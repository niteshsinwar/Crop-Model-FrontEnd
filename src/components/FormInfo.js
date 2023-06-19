import React from 'react';

const FormInfo = (props) => {
  const { label, onChange, id, ...inputProps } = props; // Change inputProp to inputProps
  return (
    <div className='formInput'>
      <label htmlFor={id}>{label}</label> {/* Add htmlFor attribute with the id */}
      <input id={id} {...inputProps} onChange={onChange} required />
    </div>
  );
};

export default FormInfo;
