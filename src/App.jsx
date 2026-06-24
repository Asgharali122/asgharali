import React from "react";
// import Likebutton from "./Components/usewithusestate";
import Profile from "./Components/UseState/Profile";
import Students from "./Components/UseState/Students";
import SimpleForm from "./Components/FormHandling/SimpleForm";
import MultipleForm from "./Components/FormHandling/MultipleForm";
import Simple from "./Components/UseEffect/Simple";
import Timer from "./Components/UseEffect/Timer";
import Window from "./Components/UseEffect/Window";
import User from "./Components/UseEffect/User";
import UseRef from "./Components/UseRef/UseRef";
import WithoutMemo from "./Components/UseMemo/WithoutMemo";
import WithuseMemo from "./Components/UseMemo/WithuseMemo";
import Navbar from "./Components/Routing/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Routing/Home";
import About from "./Components/Routing/About";
import Services from "./Components/Routing/Services";
import Portfolio from "./Components/Routing/Portfolio";
import { EmailJs } from "./Components/Emailjs/EmailJs";
import UseStore from "./Components/ContexApi/UseStore";

function App() {
  return (
    <div>
      {/* <Likebutton /> */}
      {/* <Profile/> */}
      {/* <Students/>
      <Profile/> */}
      {/* <SimpleForm/> */}
      {/* <MultipleForm/> */}
      {/* <Simple/> */}
      {/* <MultipleForm/> */}
      {/* <Timer/> */}
      {/* <Window/> */}
      {/* <User/> */}
      {/* <UseRef/> */}
      {/* <WithoutMemo/> */}
      {/* <WithuseMemo/> */}
    {/* <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/services" element={<Services/>} />
     <Route path="/portfolio" element={<Portfolio/>} />





      </Routes>
    
    
    
    
    </BrowserRouter> */}
    {/* <EmailJs/> */}
    <UseStore/>
    </div>
  );
}

export default App;