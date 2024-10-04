import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CertificateDemo from './components/certificate/CertificateDemo';
import LearnerCarousel from './components/learnerCarousel/LearnerCarousel';
import LearningPlatform from './components/learning/LearningPlatform';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <CertificateDemo/>
    <LearningPlatform/>
    <LearnerCarousel/>
    <Cta />
    <Footer/>
    </>
  );
}

export default App;
