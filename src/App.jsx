import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Experience from "./component/Experience";
import Tech from "./component/Tech";
import Works from "./component/Works";
import Feedbacks from "./component/Feedbacks";
import Contact from "./component/Contact";
import StarCanvas from "./component/StarCanvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;