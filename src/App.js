import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Video from './Video'

function App() {
  return (
    <div>
      <Router>
            <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/video/:id' element={<Video />} />
        </Routes>
      </Router>
    </div>
  ) 
}

export default App;
