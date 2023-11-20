import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import Hero from './components/ui/Hero/Hero';
import About from './components/ui/About/About';
import Experience from './components/ui/Experience/Experience';
import Portfolio from './components/ui/Portfolio/Portfolio';
import Skills from './components/ui/Skills/Skills';
import Contacts from './components/ui/Contacts/Contacts';
import './styles/common.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
