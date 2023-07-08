import { nanoid } from "nanoid";
import { FaAward, FaHandshake, FaMedapps, FaPeopleCarry, FaShieldAlt, FaSpa, FaUserCheck, FaUserTie, FaUsers } from "react-icons/fa";

const info = [
  {
    id: nanoid(),
    icon: <FaUserTie/>,
    title: "Professionalism",
    text: "Upholding a high level of professionalism in our Conduct, interactions, and the delivery of our services.",
  },
  // {
  //   id: nanoid(),
  //   icon: <FaShieldAlt />,
  //   title: "Safety",
  //   text: "Ensuring the Safety and Well-being of Our Employees,Clients, and Communities by Maintaining Strict Adherence to Safety Standards and Best Practices.",
  // },
  {
    id: nanoid(),
    icon: <FaHandshake />,
    title: "Integrity",
    text: "Conducting business with honesty, transparency and ethical behaviour, building trust and fostering long-term relationships with our stakeholders.",
  },
  {
    id: nanoid(),
    icon: <FaAward />,
    title: "Excellence",
    text: "Striving for excellence in all aspects of our work, delivering high-quality services and solutions to our clients.",
  },
  {
    id: nanoid(),
    icon: <FaSpa />,
    title: "Sustainability",
    text: " Demonstrating a commitment to environmental responsibility, sustainable practices and social responsibility in our operations.",
  },
  // {
  //   id: nanoid(),
  //   icon: <FaMedapps />,
  //   title: "Innovation",
  //   text: "Encouraging a culture of innovation and continuous improvement, Seeking new technologies, and finding creative solutions to meet our clients' evolving needs.",
  // },
  // {
  //   id: nanoid(),
  //   icon: <FaPeopleCarry/>,
  //   title: "Collaboration",
  //   text: "Promoting teamwork, cooperation, and effective communication across all levels of the organization, as well as with our clients and partners.",
  // },
  {
    id: nanoid(),
    icon: <FaUserCheck/>,
    title: "Accountability",
    text: "Taking ownership of our actions, responsibilities, and outcomes, and being accountable for meeting our commitments.",
  },
  {
    id: nanoid(),
    icon: <FaUsers />,
    title: "Customer Focus",
    text: "Placing our clients at the center of everything we do, understanding their needs, and providing exceptional customer service.",
  },
];
export default info