import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookInstallationPage from "./pages/BookInstallationPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServiceDetailsPage from "./pages/ServiceDetails";

export default function App() {

  const [showFooter, setShowFooter] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/book-installation" element={<BookInstallationPage hideFooter={() => setShowFooter(false)} showFooter={() => setShowFooter(true)}/>} />
      </Routes>
      {showFooter && <Footer />}
    </Router>
  );
}
