import React from 'react';
import Loader from '../../Loader';
import Nav from '../../Navigationbar/Navigationbar-three';
import Banner from './Banner'
import Aboutus from '../../Home/Construction/Aboutus';
import Services from './content/Services';
import About2 from '../../Work/Work-one';
import Team from '../../Team/Team-one';
import Sidebar from "../../Sidebar";
import Action from '../../Action';
import Footer from '../../Footer';
import Video from '../../Video/Video-two';
import Counter from '../../Counter/Counter-two';
import ScrollTop from '../../ScrollTop';
import Accordian from '../../Accordian';
import Procces from '../../Process/Process-one';
const Construction = () => {
    return (
        <>
            <Loader />
             <Nav />
            {/* <Sidebar /> */}
            <Banner name="FAQ" />
            {/* <Aboutus /> */}
            
            <Accordian />
            <Counter />
            
            {/* <About2 /> */}
            {/* <Team />*/}
            <Action /> 
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Construction;