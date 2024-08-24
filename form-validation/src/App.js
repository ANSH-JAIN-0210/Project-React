import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'A valid email is required';
      valid = false;
    }

    if (!formData.password.trim() || formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      // Handle successful form submission here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-validation-app">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
