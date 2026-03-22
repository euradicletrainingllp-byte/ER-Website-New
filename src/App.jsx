import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JourneySection from "./sections/JourneySection";
import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities.jsx";
import GrowWithUs from "./pages/GrowWithUs.jsx";
import BlogPowerSkills from "./pages/BlogPowerSkills.jsx";
import BlogPsychologicalSafety from "./pages/BlogPsychologicalSafety.jsx";
import BlogCapabilityBuilding from "./pages/BlogCapabilityBuilding.jsx";
import Story1 from "./pages/Story1.jsx";
import Story2 from "./pages/Story2.jsx";
import Story3 from "./pages/Story3.jsx";
import LeadershipDevelopment from "./pages/LeadershipDevelopment.jsx";
import ConsultingTalentManagement from "./pages/ConsultingTalentManagement.jsx";
import AssessmentDevelopmentCenters from "./pages/AssessmentDevelopmentCenters.jsx";
import PowerSkillsDevelopment from "./pages/PowerSkillsDevelopment.jsx";
import DigitalBusinessTransformation from "./pages/DigitalBusinessTransformation.jsx";
import CommercialSalesEnablement from "./pages/CommercialSalesEnablement.jsx";
import DEICultureBuilding from "./pages/DEICultureBuilding.jsx";
import CreativeSolutions from "./pages/CreativeSolutions.jsx";
import GetInTouch from "./pages/GetInTouch.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import Brochures from "./pages/Brochures.jsx";
import ResourcesModal from "./components/ResourceModal.jsx";
import Privacy from "./pages/Privacy.jsx";
import TermsCondition from "./pages/TermsCondition.jsx";

const App = () => {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="overflow-hidden">
        <Navbar openModal={openModal} />
        {modalType && (
          <ResourcesModal modalType={modalType} closeModal={closeModal} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/why-euradicle" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/grow-with-us" element={<GrowWithUs />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/power-skills" element={<BlogPowerSkills />} />
          <Route path="/blogs/ai-ethics" element={<BlogPsychologicalSafety />} />
          <Route path="/blogs/chatai-at" element={<BlogCapabilityBuilding />} />
          <Route path="/privacy-and-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route
            path="/capabilities/leadership-development"
            element={<LeadershipDevelopment />}
          />
          <Route
            path="/capabilities/consulting-talent-management"
            element={<ConsultingTalentManagement />}
          />
          <Route
            path="/capabilities/assessment-development-centers"
            element={<AssessmentDevelopmentCenters />}
          />
          <Route
            path="/capabilities/power-skills-development"
            element={<PowerSkillsDevelopment />}
          />
          <Route
            path="/capabilities/digital-business-transformation"
            element={<DigitalBusinessTransformation />}
          />
          <Route
            path="/capabilities/commercial-sales-enablement"
            element={<CommercialSalesEnablement />}
          />
          <Route
            path="/capabilities/creative-solutions"
            element={<CreativeSolutions />}
          />
          <Route
            path="/capabilities/dei-culture-building"
            element={<DEICultureBuilding />}
          />
          <Route path="/stories/awareness" element={<Story1 />} />
          <Route path="/stories/aspire" element={<Story2 />} />
          <Route path="/stories/catalyst" element={<Story3 />} />
          <Route
            path="/brochures"
            element={<Brochures openModal={openModal} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <JourneySection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
