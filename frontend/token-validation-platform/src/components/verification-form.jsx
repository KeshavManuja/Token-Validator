import React, { useState } from 'react';
import axios from 'axios';
import '../css/VerficationForm.css';
// const BASE_URL = 'http://localhost:4000';
const VerificationForm = () => {
  const [certificateId, setCertificateId] = useState('');
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [tokenError, setTokenError] = useState('');
  const BASE_URL = "http://localhost:4000"
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${BASE_URL}/record/${certificateId}`);
      const { data } = response;
      setCertificateDetails(data.data);
      setIsValid(true);
      setTokenError('');
    } catch (error) {
      console.error('Error fetching certificate details:', error);
      setCertificateDetails(null);
      setIsValid(false);
      if (error.response && error.response.status === 400) {
        setTokenError('Token is invalid');
      } else {
        setTokenError('');
      }
    }
  };

 

  return (
    <div className="verification-container">
      <form className="verification-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          placeholder="Enter Certificate ID"
        />
        <button type="submit">Verify</button>
      </form>

      {certificateDetails && (
        <div>
          <h2>Certificate Details</h2>
          <p>Recipient's Name: {certificateDetails.name}</p>
          <p>Course Name: {certificateDetails.course}</p>
          <p>Issuer's Name: {certificateDetails.issuer}</p>
          <p>Date of Issue: {certificateDetails.issueDate}</p>
          <p>Validity: {isValid ? 'Valid' : 'Invalid'}</p>
        </div>
      )}
      {tokenError && (
        <div>
          <p>{tokenError}</p>
        </div>
      )}
    </div>
  );
};

export default VerificationForm;
