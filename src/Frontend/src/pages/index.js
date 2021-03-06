import React, {useState} from 'react'
import Events from '../components/EventSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import TestPage from '../components/TestSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SearchPage from '../components/SearchSection';
import UploadPage from '../components/UploadSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection />
         <TestPage/> 
         <SearchPage/>
         <UploadPage/>
         <InfoSection {...homeObjFour}/>
         <Events />

         <Footer /> 
        </>
    )
};

export default Home;
