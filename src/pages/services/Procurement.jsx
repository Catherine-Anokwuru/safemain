import { FaCircle } from "react-icons/fa";
import image from "../../assets/service-vessel.jpg";
import { motion } from "framer-motion";

const Procurement = () => {
  return (
    <section className="services">
      <div className="serve-head">
        <div className="bg"></div>
        <h3> Our Services</h3>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }}>
        <div className="serve-container">
          <h4>Procurement and Supply Chain Services</h4>
          <div className="line"></div>

          <p>
            Our team of experienced procurement professionals has the expertise and industry knowledge to manage the entire procurement process, from sourcing and procurement to logistics and
            delivery. We work closely with our clients to understand their specific needs and requirements, and we use our extensive network of suppliers and vendors to ensure that they receive the
            best products and services available. <br />
            <img src={image} alt="Procurement" />
            Our procurement services cover a wide range of products and services, including: <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Oilfield equipment and supplies. <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Spare parts and components. <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Pipes and fittings. <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Chemicals and additives. <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Tools and machinery. <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Safety and personal protective equipment. <br />
            <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Engineering and consulting services. <br /> At Safemain Integrated Services Limited, we understand the importance of timely
            delivery and reliable service. That's why we work closely with our suppliers and vendors to ensure that our clients receive their products and services on time and to the highest standards
            of quality. We also provide comprehensive logistics and transportation services to ensure that our clients receive their products and services in the most efficient and cost-effective
            manner possible. Our commitment to quality, reliability, and customer satisfaction has made us a trusted procurement partner to many companies in the oil and gas industry
          </p>
        </div>
      </motion.div>
    </section>
  );
};
export default Procurement;
