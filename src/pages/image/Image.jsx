import decom from "../../assets/decom.jpg";
import eng from "../../assets/eng.jpg";
import fabrication from "../../assets/fabrication.jpg";

const Image = () => {
  return (
    <div className="img">
      <img src={decom} alt="" />
      <img src={eng} alt="" />
      <img src={fabrication} alt="" />
    </div>
  );
};
export default Image;
