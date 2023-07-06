import { nanoid } from "nanoid";
import oil from '../../assets/oil.jpg'
import fabrication from '../../assets/fabrication.jpg'
import eng from "../../assets/eng.jpg";
import vessel from '../../assets/vessel.jpg'

const list = [
  {
    id: nanoid(),
    image: vessel,
    title: "Igniting Solutions, Energizing Possibilities.",
  },
  {
    id: nanoid(),
    image: oil,
    title:
      "Delivering High-quality, Reliable, and Cost-effective Oil and Gas Services.",
  },
  {
    id: nanoid(),
    image: eng,
    title: "Customer Satisfaction is our Priority.",
  },
];

export default list;