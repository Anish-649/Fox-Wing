import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/heroPage/Hero";
import SecondPage2 from "./components/secondPage2/SecondPage2";
import ThirdPage from "./components/thirdPage/ThirdPage";
import FourthPage from "./components/fourthPage/FourthPage";
import FifthPage from "./components/fifthPage/FifthPage";
import Events from "./components/events/Events";
import ClientReview from "./components/clientReviews/ClientReview";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <SecondPage2 />
              <ThirdPage />
              <FourthPage />
              <FifthPage />
              <Events />
              <ClientReview />
              <Footer />
            </>
          }
        />

        {/* Contact Page Route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
