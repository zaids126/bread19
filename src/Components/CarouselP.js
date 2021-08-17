import React from 'react'
import carousel1 from '../Images/carousel1.png'
import carousel2 from '../Images/carousel2.png'
import carousel3 from '../Images/carousel3.png'


const CarouselP = () => {
    return (
        <div className='container-fluid d-flex justify-content-center'>
            <h3 className='position-absolute mt-5'>BROWSE ALL MY OFFERINGS</h3>       
             <div className='container-fluid container-carousel d-flex justify-content-between align-items-center'>
            
           <div className='container-carousel1 border-color1 p-2 border-radius'><img src={carousel1}/></div> 
           <div className='container-carousel2 border-color1 p-2 border-radius'><img src={carousel2}/>
           </div> 
           <div className='container-carousel3 border-color1 p-2 border-radius'><img src={carousel3}/></div> 
           <div className='carousel-icons position-absolute'>
                <i class="fas fa-arrow-circle-left"></i>
            <i class="fas fa-arrow-circle-right"></i>
            </div>
        </div>
       
        </div>

    )
}

export default CarouselP;
