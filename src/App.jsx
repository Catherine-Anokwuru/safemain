import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Carousel from "./pages/hero/Carousel";
import Decomissioning from "./pages/services/Decomissioning";
import Engineering from "./pages/services/Engineering";
import Consultation from "./pages/services/Consultation";
import Procurement from "./pages/services/Procurement";
import Error from "./pages/error/Error";
import SharedLayout from "./pages/SharedLayout";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Carousel />} />
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
