import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Main from './pages/index';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="home" element={<Main/>}/>
      </Routes>
    </Router>
  )
}

export default App;