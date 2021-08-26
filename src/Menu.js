import React from 'react'
import According from './According'


function MENU() {
    return (
        <>

        
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="pille.jpg" class="d-block w-100" alt="thump"/>
         
          </div>
          <div class="carousel-item">
            <img src="riin.jpg" class="d-block w-100" alt="thump"/>
          </div>
          <div class="carousel-item">
            <img src="veg-food-png-2.png" class="d-block w-100" alt="thump"/>
          </div>
          <div class="carousel-item">
            <img src="viktor.jpg" class="d-block w-100" alt="thump"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{marginTop:'-205px'}}>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{marginTop:'-205px'}}>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
<div className="brand">
      <div class="col-sm-12 text-center mb-100">
      <h1 class="title">Nisarga Upahar</h1>
      <h3 class="beige">Welcome to Nisarga Upahar</h3>
      <h3>Pure Veg Family Restaurant</h3>
        <h3>Bakes, Cakes & Sweets</h3>
   </div>
   </div>

  <According/>
        </>
    )
}

export default MENU
