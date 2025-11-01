import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMugHot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhone} /> +91-123456789
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> sarvsresht@gmail.com
        </li>
        <li>
          <FontAwesomeIcon icon={faMugHot} /> BrewedChai
        </li>
      </ul>
    </div>
  );
};

export default Contact;
