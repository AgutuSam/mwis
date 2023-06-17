import React from 'react';


const Video = () => {
    return(
    <>
     <section className="video section-style pt-bg-dark">
         <div className="pt-bg-overley1 pt-opacity1" style={{backgroundImage: "url('images/bg/02.jpg')"}}></div>
         <div className="container">
            <div className="row">
               <div className="col-lg-2"></div>
               <div className="col-lg-8 text-center">
                  <div className="pt-section-title-box mb-5">
                     <span className="pt-section-sub-title">News and Events</span>
                     <h2 className="pt-section-title text-white">Investors Conference held on 18th May 2023</h2>
                     <p className="pt-section-description text-white">The Investor's Conference was held on May 18, 2023, at the prestigious Sarova Panafric in Nairobi. The conference brought together a diverse group of investors, government officials, industry experts, and stakeholders.
                     </p>
                  </div>
                  <div className="pt-popup-video-block">
                     <div className="pt-video-icon">
                        <a href="https://www.youtube.com/embed/vDNsgrJwx1E" className="pt-video popup-youtube">
                        <i aria-hidden="true" className="ion ion-play"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-2"></div>
            </div>
         </div>
         <div className="pt-section-big-title bottom text-center wow animate__fadeInUp" data-wow-duration="1s"
            data-wow-delay="1s">
            <h2 className="big-heading-title big-heading-title11">Watch Our Video</h2>
         </div>
      </section>
      </>
    );

}
export default Video;