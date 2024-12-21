import React, { useState } from "react";
import "./Contactme.css";

function Contactme() {
  const [form, setform] = useState({});
  return (
    <div className="contactme__container">
      <div className="contactme__containter-mail">
        <div>Contact Me</div>

        <div>
          You can write a mail directly to me if you want to work with me or
          collaborate for a project.
        </div>
      </div>
      <div className="contactme__containter-form">
        <form>
          <div className="contactme__input-container">
            <label htmlFor="Name">Name:</label>
            <input type="text" name="Name" id="Name" required />
          </div>
          <div className="contactme__input-container">
            <label htmlFor="Email">Email:</label>
            <input type="email" name="Email" id="Email" required />
          </div>
          <div className="contactme__input-container">
            <label htmlFor="Contactnumber">Contactnumber:</label>
            <input
              type="number"
              name="Contactnumber"
              id="Contactnumber"
              required
            />
          </div>
          <div className="contactme__input-container">
            <label htmlFor="Message">Message:</label>
            <input type="text" name="" id="" required />
          </div>
          <div>
            <button type="submit">Sendmessage</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
