import React from 'react';


const Banner = (prop) => {
    return(
    <>
    <section className="pt-breadcrumb" style={ {
    paddingTop: "253.5px"
}}>
         <div className="pt-bg-overley pt-opacity4"  style={{backgroundImage: "url('images/bg/media.jpg')"}}></div>
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="pt-breadcrumb-title">{prop.name}</h1>
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/"><i className="fas fa-home mr-2"></i>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Updates</li>
                     </ol>
                  </nav>
               </div>
            </div>
         </div>
      </section>
      </>
    );

}
export default Banner;