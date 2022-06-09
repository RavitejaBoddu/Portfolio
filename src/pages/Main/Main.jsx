
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Intro from '../../components/intro/Intro';
import Services from '../../components/services/Services';
import About from '../About/About';



const Main = () => {
    
    return (
      <div>
        <Intro />
        <Services />
        <Contact />
        <Footer />
        {/* <About /> */}
      </div>
    ); 
}

export default Main