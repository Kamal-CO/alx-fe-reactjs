import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Form Handling Demo</h1>
      <p>Comparing Controlled Components vs Formik</p>
      <div className="forms-container">
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}

export default App;