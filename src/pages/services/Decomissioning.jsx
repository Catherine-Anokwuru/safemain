import image from "../../assets/vessel.jpg";
import { FaCircle } from "react-icons/fa";

const Decomissioning = () => {
  return (
    <section className="services">
      <div className="serve-head">
        <div className="bg"></div>
        <h3> Our Services</h3>
      </div>
      <div className="serve-container">
        <h4>Abandonment and Decommissioning</h4>
        <div className="line"></div>

        <p>
          At Safemain Integrated Services Limited, we are also committed to helping our clients with abandonment and decommissioning services. <br />{" "}
            <img src={image} alt="Procurement" />
          Our team has the experience and knowledge to help you safely and efficiently decommission your assets, including <br /> <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Wells,{" "}
          <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Platforms and <br />
          <FaCircle style={{ color: "#f58220", fontSize: "0.7rem" }} /> Fields. <br />
          We also offer project management services to ensure that your project is completed on time and within budget.
        </p>
      </div>
    </section>
  );
};
export default Decomissioning;
