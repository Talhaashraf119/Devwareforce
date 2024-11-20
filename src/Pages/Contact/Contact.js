import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>


      <section class="contact-section">
    <div class="container first-part">
      <div class="row no-gutters d-flex contact-info">
        
        <div class="col-md-6 d-flex">
          <div class="align-self-stretch box p-4 py-md-5 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
            <i style={{fontSize:'42px',color:'#0dcaf0'}}class="fa-solid fa-phone"></i>            </div>
            <h3 class="mb-4">Contact Number</h3>
            <p><a href="https://wa.me/+923004612583">+92 3004612583</a></p>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="align-self-stretch box p-4 py-md-5 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
            <i style={{fontSize:'42px',color:'#0dcaf0'}} class="fa-regular fa-envelope"></i>            </div>
            <h3 class="mb-4">Email Address</h3>
            <p><a href="mailto:talhaashraf119@gmail.com">devwareforce@gmail.com</a></p>
          </div>
        </div>
      
      </div>
    </div>
  </section>
       
  <a href="https://wa.me/+923004612583" target="_blank" class="whatsapp-btn">
    <i class="fab fa-whatsapp"></i>    </a>
 
  <section class="ftco-section ftco-no-pt ftco-no-pb contact-section">
    <div class="container-fluid px-0">
      <div class="row no-gutters block-9">
        <div class="col-md-6 order-md-last d-flex">
          <form action="https://formsubmit.co/talhaashraf119@gmail.com" method="POST" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Subject"/>
            </div>
            <div class="form-group">
              <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
            </div>
          </form>
        
        </div>

        <div class="col-md-6 d-flex">
          <div id="map" class="bg-white"></div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Contact