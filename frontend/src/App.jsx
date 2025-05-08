import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import BookInstallationPage from "./section/BookInstallationPage";
import AboutUsPage from "./pages/AboutUsPage";

export default function App() {

  const [showFooter, setShowFooter] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Header /> {/* Ensure Header is visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/book-installation" element={<BookInstallationPage hideFooter={() => setShowFooter(false)} showFooter={() => setShowFooter(true)}/>} />
      </Routes>
      {showFooter && <Footer />} {/* Ensure Footer is visible on all pages */}
    </Router>
  );
}
