import React from 'react';


const Counter = () => {
    return(
    <>
      <section className="Counter pt-bg-dark ">
         <div className="pt-bg-overley1 pt-opacity2" style={{ backgroundImage: "url('images/bg/02.png')"}}></div>
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-md-6 col-12 mb-xl-0  text-center">
                  <div className="pt-counter-contain">
                     <div className="pt-counter-img">
                        <div className="pt-counter-media">
                           <i className=" flaticon-008-factory"></i>
                        </div>
                     </div>
                     <div className="pt-counter-info">
                        <div className="pt-counter-num-prefix">
                           <h5 className="timer" data-to="3200" data-speed="5000">30</h5>
                           <span className="pt-counter-prefix"></span>
                        </div>
                        <p className="pt-counter-description mb-0 text-white">Billion- Value of Dams</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6 col-12 mb-xl-0  text-center">
                  <div className="pt-counter-contain">
                     <div className="pt-counter-img">
                        <div className="pt-counter-media">
                           <i className=" flaticon-009-crane"></i>
                        </div>
                     </div>
                     <div className="pt-counter-info">
                        <div className="pt-counter-num-prefix">
                           <h5 className="timer" data-to="1500" data-speed="5000">5000</h5>
                           <span className="pt-counter-prefix"></span>
                        </div>
                        <p className="pt-counter-description mb-0 text-white">Jobs to be created</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6 col-12 mb-xl-0 text-center">
                  <div className="pt-counter-contain">
                     <div className="pt-counter-img">
                        <div className="pt-counter-media">
                           <i className=" flaticon-024-graphic-tool"></i>
                        </div>
                     </div>
                     <div className="pt-counter-info">
                        <div className="pt-counter-num-prefix">
                           <h5 className="timer" data-to="1000" data-speed="5000">1000</h5>
                           <span className="pt-counter-prefix"></span>
                        </div>
                        <p className="pt-counter-description mb-0 text-white">Farmers to benefit</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6 col-12 mb-xl-0  text-center">
                  <div className="pt-counter-contain">
                     <div className="pt-counter-img">
                        <div className="pt-counter-media">
                           <i className=" flaticon-026-settings-2"></i>
                        </div>
                     </div>
                     <div className="pt-counter-info">
                        <div className="pt-counter-num-prefix">
                           <h5 className="timer" data-to="2200" data-speed="5000">900</h5>
                           <span className="pt-counter-prefix"></span>
                        </div>
                        <p className="pt-counter-description mb-0 text-white">Billion Litres of water to be saved</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Counter;