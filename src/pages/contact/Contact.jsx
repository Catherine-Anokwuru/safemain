import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <div className="serve-head">
        <div className="bg"></div>
        <h3> Contact Us</h3>
        <form className="form">
          <div className="form-row">
            <label htmlFor="name">name</label>
            <input type="text" className="form-input" name="name" id="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="phone number">phone number</label>
            <input type="text" className="form-input" name="phone number" id="phone number" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">email</label>
            <input type="text" className="form-input" name="email" id="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="subject">subject</label>
            <input type="text" className="form-input" name="subject" id="subject" required />
          </div>
          <div className="form-row">
            <label htmlFor="message">message</label>
            <input type="text" className="form-input" name="message" id="message" required />
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact