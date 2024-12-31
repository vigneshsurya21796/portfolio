import React, { useState } from "react";
import "./Contactme.css";

function Contactme() {
  const [form, setform] = useState({
    name: "",
    email: "",
    contactnumber: "",
    message: "",
  });
  const formchange = (e) => {
    const { name, value } = e.target;

    setform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <div className="contactme__container">
      <div className="contactme__containter-mail">
        <h1>Contact Me</h1>

        <p>
          You can write a mail directly to me if you want to work with me or
          collaborate for a project.
        </p>
      </div>
      <div className="contactme__containter-form">
        <form className="contactme__form-flex">
          <div className="contactme__input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={formchange}
            />
          </div>
          <div className="contactme__input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={formchange}
              required
            />
          </div>

          <div className="contactme__input-container">
            <label htmlFor="contactnumber">Contactnumber:</label>

            <input
              type="tel"
              name="contactnumber"
              id="contactnumber"
              value={form.contactnumber}
              onChange={formchange}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="contactme__input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Write you message"
              name="message"
              id="message"
              required
              value={form.message}
              onChange={formchange}
            />
          </div>
          <div className="contacme__sendmessage">
            <button type="submit">Sendmessage</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
