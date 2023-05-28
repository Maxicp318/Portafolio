import './App.css';
import Header from './1_header/who_I_am';
import Main from './2_main/technicalKnowledgeAndSoftSkills';
import Main2 from './2_main/certifications';
import Aside from './3_aside/projects';
import Footer from './4_footer/contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Main2/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
