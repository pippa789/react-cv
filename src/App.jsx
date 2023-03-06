import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Projects from './pages/Projects';
function App() {
  return(
    <>
      <Router> 
        <NavBar />
          <Routes baseline= 'react-cv'>
            <Route exact path='/react-cv/' element={<Home/>}/>
            <Route  exact path = "/react-cv/about" element = {<About/>} />
            <Route exact path = '/react-cv/contact' element = {<Contact/>}/>
            <Route exact path = '/react-cv/projects' element = {<Projects/>}/>
          </Routes>
        <Footer />
      </Router>
    </>
  
)
}
export default App;