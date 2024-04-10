import React from 'react'
import './styless.css';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import  { useState } from 'react';


export function Card  ()  {
    const [liked, setLiked] = useState([false, false, false, false]);
    const [discountApplied, setDiscountApplied] = useState([false, false, false, false]);
    const [buttonColor, setButtonColor] = useState('#ffffff');
  
    const changeColor = () => {
      const newColor = buttonColor === '#eeca06' ? '' : '#eeca06';
      setButtonColor(newColor);   
    };
  
    const handleLikeButton = (index) => {
      const newLiked = [...liked];
      newLiked[index] = !newLiked[index];
      setLiked(newLiked);
    };
  
    const handleDiscountButton = (index) => {
      const newDiscountApplied = [...discountApplied];
      newDiscountApplied[index] = !newDiscountApplied[index];
      setDiscountApplied(newDiscountApplied);
    };
  
    return (
      <div className="carouselContainer">
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="productCard">
            <div className="productInfoContainer">
              <div className="productImage">
                <img src={require('./img/mag.png')} alt={`Product ${item}`} />
              </div>
              
              <div style={{ marginTop: -120 }}>
                <button className="addButtonn2" style={{ backgroundColor: liked[index] ? '#fa8072' : '#ffffff' }} onClick={() => handleLikeButton(index)}>
                  <FaHeart color={liked[index] ? '#ffffff' : '#fa8072'} style={{ color: '#fffff',  }}/>    <span>12</span>
                </button>
              </div>

              <div style={{ marginTop: -30 }}>
             <button className="discountButton" onClick={() => handleDiscountButton(index)}>
                    -30%
                </button>
              </div>
            </div>
            <div class="producto">
         <span class="nombre">Citrate Mag</span>
           <span class="precio">$273.00</span>
           </div>
              <div>
              <div class="producto">
         <span class="nombreP">240 Cápsulas | 800 Mg</span>
           <span class="precio2">$134.00</span>
           </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaStar style={{ color: 'yellow'}}/> <FaStar style={{ color: 'yellow',  }} /><FaStar style={{ color: 'yellow',  }}  /><FaStar style={{ color: 'yellow',  }} /><FaStar style={{ color: 'grey' }} />
              </div>
              <span style={{ color: 'black',fontSize:'18px', marginRight:'170px', marginTop:'20px'}}>COMPARTE</span>
              <div class="contenedor">
                
    <div  className="social-icons">
    <FaFacebook style={{ color: '#000000', marginRight: '15px' }} />
    <FaTwitter  style={{ color: '#000000', marginRight: '15px' }}/>
    <FaInstagram  style={{ color: '#000000', marginRight: '15px' }}/>
   
    </div>
    <button class="boton" style={{ backgroundColor: buttonColor }} onClick={changeColor}>Agregar</button>
  </div>      
         </div>
          </div>
        ))}
      </div>
    );
  };
  export default Card;

