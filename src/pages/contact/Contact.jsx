import { useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const sendEmail = () => {};
  return (
    <section className="contact">
      <div className="contact-head">
        <div className="bg"></div>
        <h3> Contact Us</h3>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }}>
        <div className="contact-container">
          <div className="contact-text">
            <h4>Get in touch with us</h4>
            <p>
              Phone: +234 706 556 1220 <br /> Email: vitalis.okoro@safemain.com.ng
            </p>
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-container">
              <div className="form-row">
                <label htmlFor="name">name</label>
                <input type="text" className="form-input" name="user_name" id="name" required />
              </div>
              <div className="form-row">
                <label htmlFor="phone number">phone number</label>
                <input type="text" className="form-input" name="phone number" id="phone number" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">email</label>
                <input type="text" className="form-input" name="user_email" id="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="subject">subject</label>
                <input type="text" className="form-input" name="subject" id="subject" required />
              </div>
            </div>
            <div className="form-row ">
              <label htmlFor="message">message</label>
              <textarea className="form-input message" name="message" id="message" cols={50} rows={10} required />
            </div>
            <div className="submit-btn">
              <button type="submit" className="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
