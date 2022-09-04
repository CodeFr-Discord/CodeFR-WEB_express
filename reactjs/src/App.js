import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Main from './pages/index';
import Learning from './pages/learning';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Contact from './pages/contact';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="home" element={<Main/>}/>
        <Route path="learning" element={<Learning/>}/>
        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="team" element={<Team/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App;