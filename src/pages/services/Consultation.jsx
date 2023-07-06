import image from "../../assets/vessel.jpg";
import { FaCircle } from "react-icons/fa";

const Consultation = () => {
  return (
    <section className="services">
      <div className="serve-head">
        <div className="bg"></div>
        <h3> Our Services</h3>
      </div>
      <div className="serve-container">
        <h4>Marine Consultation and Vessel Chartering</h4>
        <div className="line"></div>

        <p>
          We offer maritime consultation and vessel chartering services to help our clients navigate the complex regulations and requirements of the Nigerian maritime industry.
          <img src={image} alt="Procurement" />
          Our team of experts provides guidance and support on all aspects of maritime operations, including: <br /> <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> vessel chartering,{" "}
          <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> cargo handling, <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> and logistics.
        </p>
      </div>
    </section>
  );
};
export default Consultation;
