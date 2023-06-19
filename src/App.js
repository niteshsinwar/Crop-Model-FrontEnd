import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
