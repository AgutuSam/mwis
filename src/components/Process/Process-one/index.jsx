import React from 'react';


const Procces = () => {
    return(
    <>
    <section className="procces py-0">
         <div className="container-fluid px-0">
            <div className="row no-gutters">
               <div className="col-xl-4 col-md-12">
                  <div className="pt-process-step pt-process-1 pt-bg-dark">
                     <div className="pt-process-info">
                     <h3 className="pt-process-title text-white">Expression of Interest</h3>
                        <p className="pt-process-description text-white">Intrested in partnering with the Government? Go to projects page and sign up, login and view projects available and submit proposal
                            
                            
                        </p>
                     </div>
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-link" href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left pt-btn-line-left"></span>
                              <span className="pt-button-text text-white">Read more</span>
                              <span className="pt-button-line-right pt-btn-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon  text-white"></i>
                           </div>
                        </a>
                     </div>
                     <span className="pt-process-number">01</span>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="pt-bg-overley1 pt-opacity4" style={{backgroundImage: "url('images/process/01.jpg')"}}></div>
               </div>
               <div className="col-xl-4 col-md-12">
                  <div className="pt-process-step pt-process-1 pt-bg-dark">
                     <div className="pt-process-info">
                     <h3 className="pt-process-title text-white">Approval and signing</h3>
                        <p className="pt-process-description text-white">Project approval requires a rigorous process that prioritises those who have submitted documents 
                            as per the terms required. On approval the Ministry will invite you to sign the mandate to start. 
                        </p>
                     </div>
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-link" href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left pt-btn-line-left"></span>
                              <span className="pt-button-text text-white">Read more</span>
                              <span className="pt-button-line-right pt-btn-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon  text-white"></i>
                           </div>
                        </a>
                     </div>
                     <span className="pt-process-number">02</span>
                  </div>
               </div>
            </div>
            <div className="row no-gutters">
               <div className="col-xl-4">
                  <div className="pt-bg-overley1 pt-opacity4" style={{backgroundImage: "url('images/process/02.jpg')"}}></div>
               </div>
               <div className="col-xl-4 col-md-12">
                  <div className="pt-process-step pt-process-1 pt-bg-dark">
                     <div className="pt-process-info">
                     <h3 className="pt-process-title text-white">Project Development</h3>
                        <p className="pt-process-description text-white">Succesfull bidders are expected to start and complete projects in a strict timeframe. Governmetn will monitore progress 
                            through the Ministry and on completion a cerfiticate will be provided. The certificate will be to manage and transfer the project within a specified period. 
                        </p>
                     </div>
                     <div className="pt-btn-container">
                        <a className="pt-button pt-btn-link" href="/aboutus">
                           <div className="pt-button-block">
                              <span className="pt-button-line-left pt-btn-line-left"></span>
                              <span className="pt-button-text text-white">Read more</span>
                              <span className="pt-button-line-right pt-btn-line-right"></span>
                              <i className="ion ion-android-arrow-dropright pt-btn-icon  text-white"></i>
                           </div>
                        </a>
                     </div>
                     <span className="pt-process-number">03</span>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="pt-bg-overley1 pt-opacity4"  style={{backgroundImage: "url('images/process/03.jpg')"}}></div>
                  
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Procces;