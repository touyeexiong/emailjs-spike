import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)  
    );

    e.target.reset();
  };

  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required></input>
        <label>Email</label>
        <input type="email" name="user_email" required></input>
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
