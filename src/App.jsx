import { About } from "./components/about"
import Basic from "./components/basic"
import Home from "./components/home"


import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Services from "./components/Service/services";
import Footer from "./components/Service/footer/footer";
import Contact from "./components/contact";

function App() {


  return (
    <div>
      <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contact />} />
    </Routes>
<Footer/>
   
 {/* <Basic /> */}
   </div>
  
  
  )
}

export default App
