import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import About from './Components/Body/About'
import Home from './Components/Body/Home'
import OurServices from './Components/Body/OurServices'
import Projects from './Components/Body/Projects'
import Contact from './Components/Body/Contact'
import Footer from './Components/Footer/Footer'


function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/services" element={<OurServices />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
