import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Knowledge from './pages/Knowledge';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Studies from './pages/Studies';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
      mirror: true,
    });
    AOS.refresh();

  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <AboutMe />
        <Knowledge />
        <Projects />
        <Experience />
        <Studies />
        <Footer />
      </main>
    </>
  )
}

export default App;