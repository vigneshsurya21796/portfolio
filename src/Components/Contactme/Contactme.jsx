import React, { useRef, useState } from "react";
import "./Contactme.css";
import emailjs from "emailjs-com";
import { z } from "zod";
import toast from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  contactnumber: z
    .string()
    .regex(/^\d{10}$/, "Contact number must be exactly 10 digits"),
  message: z.string().min(1, "Message is required"),
});

function Contactme() {
  const [form, setform] = useState({
    name: "",
    email: "",
    contactnumber: "",
    message: "",
  });
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const formchange = (e) => {
    const { name, value } = e.target;

    setform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const onformsubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    // Validate form data using Zod schema
    const result = formSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      // console.log("Checking");

      setErrors(fieldErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000);
      setLoading(false);
    } else {
      setErrors({});

      // Log form data for debugging
      const formData = new FormData(formRef.current);
      formData.forEach((value, key) => {
        console.log(key, value); // Log form field names and values
      });

      // Send the form data using EmailJS
      emailjs
        .sendForm(
          "service_v70h3pd", // Replace with your EmailJS service ID
          "template_fhhiu2w", // Replace with your EmailJS template ID
          formRef.current, // Pass the form reference
          "l6hGRO60uFw5HoYO9" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            setLoading(false);
            console.log("Message sent successfully!", result);
            toast.success("Message sent successfully!");
            setform({ name: "", email: "", contactnumber: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.error("Failed to send message. Try again.", error);
          }
        );
    }
  };

  return (
    <div className="contactme__container" id="Contactme">
      <div className="contactme__containter-mail">
        <div>
          <p>React out to me</p>
          <span>
            Discuss a Project or just want to say Hi? My inbox is open for all.
          </span>{" "}
          {/* Icon */}
        </div>
        <div className="Contanectme__left">
          <div className="Contactme__icons">
            <FaUser size={25} className="user__icon" />
            <div>
              <p>Name</p>
              <span>SURYA P</span>
            </div>
          </div>
          <div className="Contactme__icons">
            <FaLocationDot size={25} className="user__icon" />
            <div>
              <p>Address</p>
              <span>Chennai,India</span>
            </div>
          </div>
          <div className="Contactme__icons">
            <IoMdMail size={25} className="user__icon" />
            <div>
              <p>Email</p>
              <span>vigneshsurya21796@gmail.com</span>
            </div>
          </div>
          <div className="contactme__container-stayconnected">
            <p>Stay connected</p>
            <div className="Contactname__icons-container">
              <div>
                <a
                  href="https://www.linkedin.com/in/vigneshsurya21796/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="Stayconnected__iconsco">
                    <div>
                      <IoLogoLinkedin />
                    </div>
                    <p>Linkedin</p>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/vigneshsurya21796"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="Stayconnected__iconsco">
                    <div>
                      <IoLogoGithub />
                    </div>
                    <p>Github</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  <h1>Contact Me</h1>
        <p>
          You can write a mail directly to me if you want to work with me or
          collaborate on a project.
        </p> */}
      </div>
      <div className="contactme__containter-form">
        <form
          ref={formRef}
          className="contactme__form-flex"
          onSubmit={onformsubmit}
        >
          {/* Name Field */}
          <div className="contactme__input-container">
            <label htmlFor="name">Name:</label>

            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={formchange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="contactme__input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={formchange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Contact Number Field */}
          <div className="contactme__input-container">
            <label htmlFor="contactnumber">Contact Number:</label>
            <input
              type="tel"
              name="contactnumber"
              id="contactnumber"
              value={form.contactnumber}
              onChange={formchange}
              maxLength={10}
            />
            {errors.contactnumber && (
              <span className="error">{errors.contactnumber}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="contactme__input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              rows="3"
              placeholder="Write your message"
              name="message"
              id="message"
              value={form.message}
              onChange={formchange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="contactme__sendmessage">
            <button type="submit" disabled={loading}>
              {loading ? <span className="loader"></span> : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
