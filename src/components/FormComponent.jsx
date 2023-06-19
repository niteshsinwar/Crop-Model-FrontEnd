import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const FormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/predict`, {
      nitrogen: Number(values.nitrogen),
      phosphorus: Number(values.phosphorus),
      potassium: Number(values.potassium),
      temperature: Number(values.temperature),
      humidity: Number(values.humidity),
      ph: Number(values.ph),
      rainfall: Number(values.rainfall),
    });
    setLoading(false);
    swal('Success', `You should plant ${data.result} in your field`, 'success');
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className='body'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl mb-4'>Crop Recommendation</h1>
        {inputs.map((input) => (
          <FormInfo key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button className='py-2 px-4 rounded bg-blue-500 text-white'>
          {loading ? 'Evaluating...' : 'Recommend Crop'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
