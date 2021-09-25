import './App.css';
import NavbarSec from './components/Navbar';
import HeroSec from './components/Hero';
import FeaturesSec from './components/Features'; 
import ServicesSec from './components/Services';
import QFeatures from './components/QualityFeatures'
import CoreFeature from './components/Core Features';
import Functions from './components/Function';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Clients from './components/Clients/clients';
import Blog from './components/Blog';
import Contact from './components/contact';
import Products from './components/Products';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <NavbarSec />
    <HeroSec />
    <FeaturesSec />
    <ServicesSec />
    <QFeatures />
    <CoreFeature />
    <Functions />
    <Pricing />
    <Team />
    <Clients />
    <Blog />
    <Contact />
    <Products />
    <Footer />
    </>
  );
}

export default App;
