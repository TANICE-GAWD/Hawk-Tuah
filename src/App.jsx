import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage/HomePage"
import ShopPage from "./components/ShopPage/ShopPage"
import ServicesPage from "./components/ServicesPage/ServicesPage"
import AboutPage from "./components/AboutPage/AboutPage2"
import ContactPage from "./components/ContactPage/ContactPage"
import DonatePage from "./components/DonationPage/DonationPage"
import LoginPage from "./components/LoginPage/LoginPage"
import SearchPage from "./components/SearchPage/SearchPage"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Header />
        <main id="page" className="container" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donations" element={<DonatePage />} />
            <Route path="/login-register" element={<LoginPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

