import React from 'react'
import topImage from '../Images/janedoe.png'
import yoga from '../Images/yogaimage.png';



const Card = () => {
    return (
      <div className='card-bg'>        
        <div className='container-sm'>
            <div class="container  container-card  d-flex justify-content-center">
                   <div className='container-fluid container-card-inside'>
                        <div className='d-flex'>
                        <div className='m-5'>
                        <img src={topImage} className='p-1 image'/>

                        
                    
                        </div>
                        
                           
                           <div class="container container-box pt-5">
                            <div class="row row-container">
                         <div class="col pb-4 "><p className='card-contents'>Yoga</p></div>
                        <div class="col"><p className='card-contents'>Wellness</p></div>
                            <div></div>
                    <div class="col"><p className='card-contents'>Fitness</p></div>
                      </div>
                    </div>
                    
                    <div className='pt-5 button-container'>
                   <button type="button" class='btn btn-primary1 mb-4'>Book Now</button>
                   <button type="button" class='btn btn-primary2'>Contact me</button>


                   </div>
                        
                        </div>
                        
                        <div className='text'>
                        <p className='ml-4 text-dark image-name'>Jane Doe</p>
                      </div>
                      <div className='description-container'>
                        <p className='text-dark '>Hi, I am Jane Doe, your next door fitness instructor with just one goal-Make people fit and healthy.Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                      </div>
                      <div className='logo-container'>
                        <i className="fab fa-instagram logo"></i>
                        <i className="fab fa-facebook-f logo"></i>
                        <i className="fab fa-youtube logo"></i>
                        <i className="fab fa-twitter logo"></i>
                        <i className="fab fa-linkedin logo"></i>
                        <i className="fab fa-spotify logo"></i>
                      </div>
        <hr className='text-dark'/>
          <div className='container d-flex container-3 pt-2'>
          <i class="fas fa-map-marker-alt text-dark p-1"></i>
          <p className='pad'>Lives in</p><p className='ml-3 pad'><span className='text-dark effect border-color border-radius'> New Delhi</span></p> 
             </div>
             <div className='container d-flex pr-4 container-3'>
             <i class="fas fa-comments text-dark p-1"></i>
          {/* <p><span className='text-dark effect border-color border-radius'> Punjabi </span></p>  */}
          <p className='pad'>Speaks</p><p className='pad'><span className='text-dark effect border-color border-radius'>English </span></p>
          <p className='mr-3 pad'><span className='text-dark effect border-color border-radius'> Hindi </span></p> 
          <p className='pad'><span className='text-dark effect border-color border-radius'> Punjabi </span></p> 
 
             </div>

             
             <div class="container container-3 mt-5">
              <div class="row">
                <div class="col">
                  <h3 className='text-dark mw-100 '>Check Out My video about 30min yoga for beginners</h3>
                  <div className='mt-5'> 
                     <h5 className='text-dark'>Contact me <i class="fas fa-long-arrow-alt-right text-dark"></i></h5>

                  </div>

                     </div>
                <div class="col border-color yoga-image-container border-radius d-flex py-2">
                  <img src={yoga} className='yoga-image '/>
                  </div>
                    </div>
                      </div>
                <div className='container mt-5 container-email container-3'>
                    <p className='text m-4'>Subscribe to my profile and never miss another update from me.</p>
                
                
                <div className='container d-flex pb-4'>                  
                   
                <input className="form-control border " type="email"  placeholder="Enter your email"/>
                <button type="button" class="btn btn-primary px-5 border-radius ">Subscribe</button>
                </div>

                    </div>


                      </div>


                   </div>
              </div>
              </div>

        
    )
}

export default Card
