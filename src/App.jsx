import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './components/Contact';
import styled from 'styled-components';


function App() {
return(
  <>
  <Router> 
   <NavBar />
    <Routes>
      <Route exact path='/Home' element={<Home/>}/>
      <Route  exact path = "/About" element = {<About/>} />
      <Route exact path = '/Contact' element = {<Contact/>}/>
    </Routes>
  </Router>
  </> 
)
}
export default App;