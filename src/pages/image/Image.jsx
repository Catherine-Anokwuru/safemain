import decom from "../../assets/decom.jpg";
import eng from "../../assets/eng.jpg";
import fabrication from "../../assets/fabrication.jpg";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <div className="img">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 1, ease:'easeInOut' }}>
        <img src={decom} alt="" className="imgg" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}>
        <img src={eng} alt="" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}>
        <img src={fabrication} alt="" />
      </motion.div>
    </div>
  );
};
export default Image;
