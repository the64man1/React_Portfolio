import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function ContactMe() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      if (!validateEmail(inputValue)) {
        setErrorText('Please enter a valid email address');
      }
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const validateInput = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (!inputValue) {
      setErrorText('Field is required');
      return;
    }

    setErrorText('');
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorText('Please enter a valid email address');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorText('');
  }

    return (
    <div class="row container card-panel left-align" id="contactme">
      <h3 class="row center">Contact Me</h3>
      <div class="row contactmebox">
        <div className='input-field col s12'>
          <p>Name:</p>
          <input placeholder="Name" name="name" value={name} onChange={handleInputChange} onBlur={validateInput} type="text" />
        </div>
        <div className='input-field col s12'>
          <p>Email:</p>
          <input placeholder="Email" name="email" value={email} onChange={handleInputChange} onBlur={validateInput} type="text" />
        </div>
        <div className='input-field col s12'>
          <p>Message:</p>
          <textarea placeholder="Message" name="message" value={message} onChange={handleInputChange} onBlur={validateInput} type="text" className="materialize-textarea"></textarea>
        </div>
      </div>
      {errorText && (
        <div>
          <p className="error-text red-text">{errorText}</p>
        </div>
      )}
      <button type="button" className="waves-effect waves-light btn-small" onClick={handleSubmitForm}>Submit</button>
    </div>
    )
}

export default ContactMe;