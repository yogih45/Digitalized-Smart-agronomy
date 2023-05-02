import React, { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css";


function Main(){
     useEffect(()=>{
        AOS.init({duration: 2000})
     },[])

    return(<div>
        <main data-aos="fade-right">
        <span class="main">FARM EQUIPMENT RENTAL</span>
        <h3 class="descrip">We will provide farm equipment rentals to advance the productivity of your Farm</h3>
        <h4><b>A great opportunity for starting an online agricultural equipment Rental Platform.</b></h4>
        <h3 class="descrip3">Lets, grow your business....</h3>
        <button class="rent"><b>Rent Now!</b></button>
        </main>
      <div className="container">
            <div class="slide-button">
               <a className="prev" >&#10094;</a>
               <a className="next" >&#10095;</a>
            </div>
    </div>
    </div>
     
    )
}
export default Main;