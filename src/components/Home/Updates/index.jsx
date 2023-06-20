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
import ScrollTop from '../../ScrollTop';
import Procces from '../../Process/Process-one';
const Construction = () => {
    return (
        <>
            <Loader />
             <Nav />
            {/* <Sidebar /> */}
            <Banner name="News & Events" />
            {/* <Aboutus /> */}
            
            <Services />
            <Procces />
            <>
            <section className="team">
         <div className="container-pt">
            <div className="row">
               <div className="col-lg-2"></div>
               <div className="col-lg-8 text-center">
                  <div className="pt-big-title mt-4">
                     <h2 className="pt-big-title1 ">challenger</h2>
                  </div>
                  <div className="pt-section-title-box">
                     <span className="pt-section-sub-title">Videos</span>
                     <h2 className="pt-section-title">Click to watch the Investor Conference</h2>
                     <p className="pt-section-description">
                     </p>
                  </div>
                  <div className="pt-popup-video-block">
                     <div className="pt-video-icon-cutom">
                        <a href="https://www.youtube.com/embed/vDNsgrJwx1E" className="pt-video popup-youtube ">
                        <i aria-hidden="true" className="ion ion-play"></i></a>
                     </div>
                  </div>
                   
               </div>
               <div className="col-lg-2"></div>
            </div>
         </div>
         
      </section>
            </>
            {/* <About2 /> */}
            {/* <Team />
            <Action /> */}
            <Footer />
            <ScrollTop />
        </>
    );

}
export default Construction;