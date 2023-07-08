import { nanoid } from "nanoid";
import { FaHome, FaInfoCircle, FaMoneyBillWaveAlt, FaPhoneAlt, FaScrewdriver, FaShip, FaShoppingBasket, FaTrashAlt } from "react-icons/fa";

const sublinks = [
  {
    pageId: nanoid(),
    page: "home",
    url: '/',
    links: [
      {
        // id: '#home',
        id: nanoid(),
        label: "Home",
        icon: <FaHome />,
        url: "#home",
      },
      {
        // id: '#about',
        id: nanoid(),
        label: "About",
        icon: <FaInfoCircle />,
        url: "#about",
      },
      {
        // id: "#values",
        id: nanoid(),
        label: "Values",
        icon: <FaMoneyBillWaveAlt />,
        url: "#values",
      },
    ],
  },
]
 export const sublinks2 = [
  {
    pageId: nanoid(),
    page: "services",
    links: [
      {
        id: nanoid(),
        label: "Procurement and Supply Chain Services ",
        icon: <FaShoppingBasket />,
        url: "/services/procurement",
      },
      {
        id: nanoid(),
        label: "Marine Consultation and  Vessel Chartering",
        icon: <FaShip />,
        url: "/services/consultation",
      },
      {
        id: nanoid(),
        label: "Abandonment and Decommissioning",
        icon: <FaTrashAlt />,
        url: "/services/decomissioning",
      },
      {
        id: nanoid(),
        label: "Engineering, Construction and Fabrication",
        icon: <FaScrewdriver />,
        url: "/services/engineering",
      },
    ],
  },
]
export const sublinks3 = [
  {
    page: "contact",
    pageId: nanoid(),
    url: "/contact/",

    links: [
      {
        id: nanoid(),
        label: "Contact Us",
        icon: <FaPhoneAlt />,
        url: "/contact/",
      },
    ],
  },
];

export default sublinks;
