import { BrowserRouter, Route, Routes, HashRouter} from "react-router-dom";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Carousel from "./pages/hero/Carousel";
import Image from "./pages/image/image";
import Navbar from "./pages/nav/Navbar";
import Sidebar from "./pages/nav/Sidebar";
import Submenu from "./pages/nav/Submenu";
import Values from "./pages/values/Values";
import Decomissioning from "./pages/services/Decomissioning";
import Engineering from "./pages/services/Engineering";
import Consultation from "./pages/services/Consultation";
import Procurement from "./pages/services/Procurement";
import Error from "./pages/error/Error";
import SharedLayout from "./pages/SharedLayout";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Carousel />}>
            {/* <Route path="about" element={<About />} />
            <Route path="values" element={<Values />} /> */}
          </Route>
          <Route path="services/decomissioning" element={<Decomissioning />} />
          <Route path="services/engineering" element={<Engineering />} />
          <Route path="services/consultation" element={<Consultation />} />
          <Route path="services/procurement" element={<Procurement />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default App;
