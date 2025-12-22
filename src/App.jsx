import Header from "./componets/Header";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HouseOne from "./pages/HouseOne";
import HouseTwo from "./pages/HouseTwo";
import Contacts from "./pages/Contact";
import Gallery from "./pages/Gallery";
import InfoPage from "./pages/InfoPage";
import Footer from "./componets/Footer";
import ScrollToTop from "./componets/ScrollToTop";

function App() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/house-one" element={<HouseOne />} />
                    <Route path="/house-two" element={<HouseTwo />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/information" element={<InfoPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
