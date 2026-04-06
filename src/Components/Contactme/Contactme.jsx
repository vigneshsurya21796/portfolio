import { useRef, useState } from "react";
import "./Contactme.css";
import emailjs from "emailjs-com";
import { z } from "zod";
import toast from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useReveal } from "../../hooks/useReveal";

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

  const headRef = useReveal(0.1);
  const infoRef = useReveal(0.12);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const result = formSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setTimeout(() => setErrors({}), 3000);
      setLoading(false);
    } else {
      setErrors({});
      emailjs
        .sendForm(
          "service_v70h3pd",
          "template_fhhiu2w",
          formRef.current,
          "l6hGRO60uFw5HoYO9"
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
    <section className="contact" id="Contactme">
      {/* Heading */}
      <div ref={headRef} className="contact__head reveal">
        <span className="section__label">Contact</span>
        <h2 className="contact__title">
          Let's Talk<span className="contact__title-dot">.</span>
        </h2>
        <p className="contact__sub">
          Have a project in mind? My inbox is open for all.
        </p>
      </div>

      <div className="contact__body">
        {/* Info column */}
        <div ref={infoRef} className="contact__info reveal">
          <div className="contact__info-item">
            <span className="contact__info-icon"><FaUser size={14} /></span>
            <div>
              <p className="contact__info-label">Name</p>
              <span className="contact__info-value">SURYA P</span>
            </div>
          </div>
          <div className="contact__info-item">
            <span className="contact__info-icon"><FaLocationDot size={14} /></span>
            <div>
              <p className="contact__info-label">Location</p>
              <span className="contact__info-value">Chennai, India</span>
            </div>
          </div>
          <div className="contact__info-item">
            <span className="contact__info-icon"><IoMdMail size={14} /></span>
            <div>
              <p className="contact__info-label">Email</p>
              <a href="mailto:vigneshsurya21796@gmail.com" className="contact__email" data-hover>
                vigneshsurya21796@gmail.com
              </a>
            </div>
          </div>

          <div className="contact__socials">
            <p className="contact__info-label">Connect</p>
            <div className="contact__social-row">
              <a
                href="https://www.linkedin.com/in/vigneshsurya21796/"
                target="_blank"
                rel="noreferrer"
                className="contact__social-pill"
                data-hover
              >
                <IoLogoLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/vigneshsurya21796"
                target="_blank"
                rel="noreferrer"
                className="contact__social-pill"
                data-hover
              >
                <IoLogoGithub size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact__form-wrap">
          <form
            ref={formRef}
            className="contact__form"
            onSubmit={handleFormSubmit}
          >
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleFormChange}
                placeholder="Your name"
              />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleFormChange}
                placeholder="your@email.com"
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="contactnumber">
                Phone <span className="contact__optional">(optional)</span>
              </label>
              <input
                type="tel"
                name="contactnumber"
                id="contactnumber"
                value={form.contactnumber}
                onChange={handleFormChange}
                maxLength={10}
                placeholder="10-digit number"
              />
              {errors.contactnumber && (
                <span className="contact__error">{errors.contactnumber}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                name="message"
                id="message"
                value={form.message}
                onChange={handleFormChange}
                placeholder="Tell me about your project..."
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <div className="contact__submit">
              <button type="submit" disabled={loading} data-hover>
                {loading ? <span className="loader" /> : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactme;
