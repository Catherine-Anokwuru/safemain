import { nanoid } from "nanoid";
import { FaAward, FaHandshake, FaMedapps, FaPeopleCarry, FaShieldAlt, FaSpa, FaUserCheck, FaUserTie, FaUsers } from "react-icons/fa";

const info = [
  {
    id: nanoid(),
    icon: <FaUserTie/>,
    title: "Professionalism",
    text: "Upholding a High Level of Professionalism in Our Conduct, Interactions, and the Delivery of Our Services.",
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
    text: "Conducting Business With Honesty,Transparency and Ethical Behavior, Building Trust And Fostering Long-term Relationships With Our Stakeholders.",
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
    text: " Demonstrating a commitment to environmental responsibility, sustainable practices, and social responsibility in our operations.",
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
    text: "Placing Our Clients At The Center Of Everything We Do,Understanding Their Needs, And Providing Exceptional Customer Service.",
  },
];
export default info