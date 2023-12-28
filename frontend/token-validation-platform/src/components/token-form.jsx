import React, { useState } from 'react';
import axios from 'axios';
import "../css/MyForm.css"

const BASE_URL = 'http://localhost:4000';

const MyForm = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    courseName: '',
    issuerName: '',
    issueDate: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(process.env.REACT_APP_BASE_URL,"process.ev.REACT_APP_BASE_URL")
      const response = await axios.post(`${BASE_URL}/record`, formData);
      console.log({ response });
      console.log('Form data:', formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="recipientName">Recipient's Name:</label>
        <input
          type="text"
          id="recipientName"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="issuerName">Issuer's Name:</label>
        <input
          type="text"
          id="issuerName"
          name="issuerName"
          value={formData.issuerName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="issueDate">Issue Date:</label>
        <input
          type="date"
          id="issueDate"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
