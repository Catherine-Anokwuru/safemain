import image from "../../assets/vessel.jpg";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Engineering = () => {
  return (
    <section className="services">
      <div className="serve-head">
        <div className="bg"></div>
        <h3> Our Services</h3>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }}>

      <div className="serve-container">
        <h4>Engineering, Construction and Fabrication</h4>
        <div className="line"></div>

        <p>
          Our engineering services include: <br /> <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> feasibility studies, <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> project design, <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> and engineering analysis. <br />{" "}
            <img src={image} alt="Procurement" />
          We also offer construction and fabrication services, which cover all aspects of the construction process, including: <br /><FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> structural
          design, <br /> <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> fabrication, <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> and installation. <br />
        </p>
      </div>
      </motion.div>
    </section>
  );
};
export default Engineering;
