import info from "./info";
import bcg from '../../assets/eng-bg.jpg'
const Values = () => {
  return (
    <section className="values" id="#values">
      <h3>
        Our Core Values
      </h3>
      <div className="uline"></div>
      <div className="values-container">
        {info.map((item) => {
          const { icon, title, text, id } = item;
          return (
            <article className="single-value" key={id}>
              <div className="value-icon"> {icon}</div>
              <h4>{title}</h4>
              <div className="line"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Values;
