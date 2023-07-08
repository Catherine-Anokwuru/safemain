import info from "./info";
import bcg from "../../assets/eng-bg.jpg";
import { motion } from "framer-motion";

const Values = () => {
  return (
    <section className="values" id="values">
      <h3>Our Core Values</h3>
      <div className="uline"></div>
      <div className="values-container">
        {info.map((item) => {
          const { icon, title, text, id } = item;
          return (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}>
              <article className="single-value" key={id}>
                <div className="value-icon"> {icon}</div>
                <h4>{title}</h4>
                <div className="line"></div>
                <p>{text}</p>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Values;
