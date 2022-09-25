import About from "./componetns/about/About";
import Header from "./componetns/header/Header";
import Nav from "./componetns/nav/Nav";
import Experinece from './componetns/experience/Experinece'
import Pertfolio from "./componetns/portfolio/Pertfolio";
import Testimonials from './componetns/testimonials/Testimonials'
import Contact from './componetns/contact/Contact'
import Footer from "./componetns/footer/Footer";
import Service from "./componetns/services/Service";

function App() {
  return (
      <>
        <Header/> 
        <Nav/>  
        <About/>
        <Experinece/>
        <Service/>
        <Pertfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </>
  );
}

export default App;
