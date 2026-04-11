import { useRef, useState } from "react";
import "./Contactme.css";
import { SplitWords } from "../../utils/SplitWords";
import emailjs from "emailjs-com";
import { z } from "zod";
import toast from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { socials } from "../../constants/index";
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
  const ctaRef  = useReveal(0.1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setform((prevForm) => ({ ...prevForm, [name]: value }));
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
    <section id="Contactme" className="contactme">
      {/* ── CTA block ───────────────────────────────────────── */}
      <div ref={ctaRef} className="contact-cta reveal">
        <span className="section__label">
          <span className="section__num">04 /</span> Contact
        </span>
        <h2 className="contact-cta__headline" aria-label="Let's Build Something Great">
          <SplitWords text="LET'S" />{" "}
          <span className="contact-cta__accent">
            <SplitWords text="BUILD" delay={0.1} />
          </span>
          <br />
          <span className="contact-cta__accent">
            <SplitWords text="SOMETHING" delay={0.2} />
          </span>{" "}
          <SplitWords text="GREAT" delay={0.35} />
        </h2>
        <p className="contact-cta__sub">
          Open to freelance, full-time, and collaborations.<br />
          Drop a message — I respond within 24 hours.
        </p>
      </div>

      {/* ── Info + Form grid ────────────────────────────────── */}
      <div className="contactme__container">
        {/* Left — info */}
        <div className="contactme__container-mail">
          <div className="Contactme__left">
            <div className="Contactme__icons">
              <FaUser size={20} className="user__icon" />
              <div>
                <p>Name</p>
                <span>SURYA P</span>
              </div>
            </div>
            <div className="Contactme__icons">
              <FaLocationDot size={20} className="user__icon" />
              <div>
                <p>Address</p>
                <span>Chennai, India</span>
              </div>
            </div>
            <div className="Contactme__icons">
              <IoMdMail size={20} className="user__icon" />
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

        {/* Right — form */}
        <div className="contactme__container-form">
          <form
            ref={formRef}
            className="contactme__form-flex"
            onSubmit={handleFormSubmit}
          >
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

            <div className="contactme__input-container">
              <label htmlFor="contactnumber">
                Phone <span className="contactme__optional">(optional)</span>
              </label>
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

            <div className="contactme__sendmessage">
              <button type="submit" disabled={loading}>
                {loading ? <span className="loader"></span> : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Site footer ─────────────────────────────────────── */}
      <footer className="site-footer">
        <p className="site-footer__copy">
          © 2025 Surya P — Designed &amp; built with React
        </p>
        <div className="site-footer__socials">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hero__social"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}

export default Contactme;
