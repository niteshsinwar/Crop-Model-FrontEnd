import React from 'react';

const FormInfo = (props) => {
  const { label, onChange, id, ...inputProp } = props;
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProp} onChange={onChange} required />
    </div>
  );
};

export default FormInfo;
