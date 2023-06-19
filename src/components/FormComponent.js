import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import FormInfo from './FormInfo';

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
    const { data } = await axios.post('http://127.0.0.1:8000/predict', {
      nitrogen: Number(values.nitrogen),
      phosphorus: Number(values.phosphorus),
      potassium: Number(values.potassium),
      temperature: Number(values.temperature),
      humidity: Number(values.humidity),
      ph: Number(values.ph),
      rainfall: Number(values.rainfall),
    });
    setLoading(false);
    swal({
      title: 'Success',
      text: `You should plant ${data.result} in your field`,
      icon: 'success',
    }).then(() => {
      window.location.href = '/'; // Redirect to the home page
    });
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const inputs = [
    { id: 1, name: 'nitrogen', label: 'Nitrogen' },
    { id: 2, name: 'phosphorus', label: 'Phosphorus' },
    { id: 3, name: 'potassium', label: 'Potassium' },
    { id: 4, name: 'temperature', label: 'Temperature' },
    { id: 5, name: 'humidity', label: 'Humidity' },
    { id: 6, name: 'ph', label: 'pH' },
    { id: 7, name: 'rainfall', label: 'Rainfall' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Crop Recommendation</h1>
        {inputs.map((input) => (
          <FormInfo key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 w-full"
          disabled={loading}
        >
          {loading ? 'Evaluating...' : 'Recommend Crop'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
