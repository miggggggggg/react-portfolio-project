import "./styles/variables.css";
import "./styles/reset.css";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Navbar></Navbar>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
