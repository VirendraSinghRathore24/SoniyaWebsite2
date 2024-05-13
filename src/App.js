import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUS from "./components/AboutUS";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import SelfTransform from "./components/SelfTransform";
import LifeCoaching from "./components/LifeCoaching";
import FaqPage from "./components/FaqPage";
import ReikiAndICHPage from "./components/ReikiAndICHPage";
import Sessions from "./components/Sessions";
import Contacts from "./components/admin/Contacts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga";
import Hoponopono from "./components/Hoponopono";
import Login from "./components/admin/Login";
import UploadVideo from "./components/admin/UploadVideo";
import WritingBook from "./components/WritingBook";

const TRACKING_ID = "G-JR6JPL6HN4";
ReactGA.initialize(TRACKING_ID);

export default function App() {

  return (
    <div className="w-full h-screen">
      <Header/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutus" element={<AboutUS/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/sessions" element={<Sessions/>}/>
          <Route path="/book/writingbook" element={<WritingBook/>}/>
          <Route path="/sessions/reiki-inner-child-healing" element={<ReikiAndICHPage/>}/>
          <Route path="/sessions/healing-self-transformation" element={<SelfTransform/>}/>
          <Route path="/sessions/life-coaching" element={<LifeCoaching/>}/>
          <Route path="/life-lessions/hooponopono-forgiveness" element={<Hoponopono/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/admin/contacts" element={<Contacts/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path="/admin/uploadvideo" element={<UploadVideo/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
     
    </div>
  )
}