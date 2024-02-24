import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav'
import Presentation from './page/presentation/who_I_am';
import Knowlege from './page/knowledgeAndSkills/knowledge';
import Certificate from './page/certifications/certificate';
import DetailsCard from './components/componentCard/detailsCard';
import Projects from'./page/projects/projects';
import Contact from './page/contact/contact';

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Presentation />} />
          <Route exact path='/knowledge' element={<Knowlege />} />
          <Route exact path='/certifications' element={<Certificate />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path="/detailsCard/:imgId" element={<DetailsCard />} />
        </Routes>
      </main>
      <footer>
        <Routes>
          <Route exact path='/contacts' element={<Contact/>} />
        </Routes>
      </footer>
    </Router>    
  )
}

export default App;
