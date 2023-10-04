import SignupForm from "./Components/SignupForm";
import HeaderComponent from "./Components/Header";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Activity from "./Components/Activity";
import Gallery from "./Components/Gallery";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import LoginForm from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <Router>
      <Routes>
           <Route exact path="/Sign-in" element={<SignupForm />} />
           <Route exact path="/header" element={<HeaderComponent />} />
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/About-us" element={<Aboutus/>} />
           <Route exact path="/Activity" element={<Activity/>} />
           <Route exact path="/Gallery" element={<Gallery/>} />
           <Route exact path="/Events" element={<Events/>} />
           <Route exact path="/Contact" element={<Contact/>} />
           <Route exact path="/Login" element={<LoginForm/>} />
      </Routes>
   </Router>
  );
}

export default App;
