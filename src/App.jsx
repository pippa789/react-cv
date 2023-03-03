import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './components/Contact';

function App() {
  return(
    <>
      <Router> 
        <NavBar />
          <Routes baseline= 'react-cv'>
            <Route exact path='/react-cv/' element={<Home/>}/>
            <Route  exact path = "/react-cv/about" element = {<About/>} />
            <Route exact path = '/react-cv/contact' element = {<Contact/>}/>
          </Routes>
      </Router>
    </>
  
)
}
export default App;