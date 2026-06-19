import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Page Imports
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Gallery from "../pages/Gallery/Gallery";
import Notice from "../pages/Notice/Notice";
import Contact from "../pages/Contact/Contact";
import Archive from "../pages/Archive/Archive";
import ScholarshipFellowship from "../pages/ScholarshipFellowship/ScholarshipFellowship";
import MedalsAwards from "../pages/MedalsAwards/MedalsAwards";
import InsuranceMediclaim from "../pages/InsuranceMediclaim/InsuranceMediclaim";
import AntiRagging from "../pages/AntiRagging/AntiRagging";
import CounsellingAssistance from "../pages/CounsellingAssistance/CounsellingAssistance";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archive" element={<Archive />} />

        {/* Resource Routes */}
        <Route path="/scholarship-fellowship" element={<ScholarshipFellowship />} />
        <Route path="/medals-awards" element={<MedalsAwards />} />
        <Route path="/insurance-mediclaim" element={<InsuranceMediclaim />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/counselling-assistance" element={<CounsellingAssistance />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
