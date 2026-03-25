import { useRef, useState } from "react";
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
    .regex(/^\d{10}$/, "Contact number must be exactly 10 digits")
    .or(z.literal("")),
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
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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

      // Send the form data using EmailJS
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Message sent successfully!");
            setform({ name: "", email: "", contactnumber: "", message: "" });
          },
          () => {
            setLoading(false);
            toast.error("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="contactme__container" id="Contactme">
      <div className="contactme__container-mail">
        <div>
          <h2 className="contactme__heading">Get In Touch</h2>
          <p>
            Discuss a project or just want to say Hi? My inbox is open for all.
          </p>
        </div>
        <div className="Contactme__left">
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
              <a href="mailto:vigneshsurya21796@gmail.com" className="contactme__email-link">
                vigneshsurya21796@gmail.com
              </a>
            </div>
          </div>
          <div className="contactme__container-stayconnected">
            <p>Stay connected</p>
            <div className="Contactname__icons-container">
              <a
                href="https://www.linkedin.com/in/vigneshsurya21796/"
                target="_blank"
                rel="noreferrer"
                className="social__pill"
              >
                <IoLogoLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/vigneshsurya21796"
                target="_blank"
                rel="noreferrer"
                className="social__pill"
              >
                <IoLogoGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

</div>
      <div className="contactme__container-form">
        <form
          ref={formRef}
          className="contactme__form-flex"
          onSubmit={handleFormSubmit}
        >
          {/* Name Field */}
          <div className="contactme__input-container">
            <label htmlFor="name">Name:</label>

            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleFormChange}
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
              onChange={handleFormChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Contact Number Field */}
          <div className="contactme__input-container">
            <label htmlFor="contactnumber">Phone <span className="contactme__optional">(optional)</span></label>
            <input
              type="tel"
              name="contactnumber"
              id="contactnumber"
              value={form.contactnumber}
              onChange={handleFormChange}
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
              onChange={handleFormChange}
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
