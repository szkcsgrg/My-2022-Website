//Components
import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Pages
import Home from "./Home";
import About from "./About";
import Konyvtar from "./Konyvtar";
import Kincseanda from "./Kincseanda";
import Szurmik from "./Szurmik";
import Sorokmenti from "./Sorokmenti";

//Styles
import "./Styles/main.css";

//Scroll to top
function componentDidMount(){
  if(!window.location.hash){
    window.scrollTo(0, 0);
  }
}
//Change Background Color on scroll.
const ChangeColor = () => {
  if(window.scrollY < 1000){
    document.getElementById("body").classList.remove("projectOne");
    document.getElementById("body").classList.remove("projectTwo");
    document.getElementById("body").classList.remove("projectThree");
    document.getElementById("body").classList.remove("projectFour");
  }
  if(window.scrollY >= 1000){
    document.getElementById("body").classList.add("projectOne");
    document.getElementById("body").classList.remove("projectTwo");
    document.getElementById("body").classList.remove("projectThree");
    document.getElementById("body").classList.remove("projectFour");
  }
  if(window.scrollY >= 2000){
    document.getElementById("body").classList.add("projectTwo");
    document.getElementById("body").classList.remove("projectOne");
    document.getElementById("body").classList.remove("projectThree");
    document.getElementById("body").classList.remove("projectFour");
  }
  if(window.scrollY >= 3000){
    document.getElementById("body").classList.add("projectThree");
    document.getElementById("body").classList.remove("projectTwo");
    document.getElementById("body").classList.remove("projectFour");
    document.getElementById("body").classList.remove("projectOne");
  }
  if(window.scrollY >= 4000){
    document.getElementById("body").classList.add("projectFour");
    document.getElementById("body").classList.remove("projectThree");
  }
}

function App() {
  const location = useLocation();
  if(location.pathname == "/"){
    window.addEventListener("scroll", ChangeColor);  
  }
  else{
    window.removeEventListener("scroll", ChangeColor);
  }
  componentDidMount();
  console.log(location.pathname);
  if(location.pathname == "/" || location.pathname == "/about"){
  return (
    <>
      <Cursor />
      <Navbar />

      <TransitionGroup>
        <CSSTransition
          timeout={500}
          classNames="fade"
          key = {location.key}
          >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/konyvtar" element={<Konyvtar />} />
          <Route path="/projects/kincseanda" element={<Kincseanda />} />
          <Route path="/projects/szurmik" element={<Szurmik />} />
          <Route path="/projects/sorokmenti" element={<Sorokmenti />} />
        </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
  }
  else{
    return (
      <>
        <Cursor />
        <TransitionGroup>
          <CSSTransition
            timeout={500}
            classNames="fade"
            key = {location.key}
            >  
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/konyvtar" element={<Konyvtar />} />
            <Route path="/projects/kincseanda" element={<Kincseanda />} />
            <Route path="/projects/szurmik" element={<Szurmik />} />
            <Route path="/projects/sorokmenti" element={<Sorokmenti />} />
          </Routes>
          </CSSTransition>
        </TransitionGroup> 
      </>
    )
  }
}

export default App;
