import React, { useState } from 'react';
import './styles.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";


export function Menu() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  const Navbar = ({ activeButton }) => { 
    return (
      <div className="appbar">
        <div className="appbarContent" style={{ position: 'relative' }}>
       <img src={require('./img/Group.png')} alt="Logo"  style={{ width: 120, height: 40, position: 'absolute', top: '-25px', left: 0 }}/>
      </div>
        <div className="navbarButtons">
          <button
            className={`navbarButton ${activeButton === 'Productos' && 'activeButton'}`}
            onClick={() => handleButtonPress('Productos')}>
            Productos
          </button>
          <button
            className={`navbarButton ${activeButton === 'Promociones' && 'activeButton'}`}
            onClick={() => handleButtonPress('Promociones')}>
            Promociones
          </button>
          <button
            className={`navbarButton ${activeButton === 'Nosotros' && 'activeButton'}`}
            onClick={() => handleButtonPress('Nosotros')}>
            Nosotros
          </button>
        </div>
        <div className="spacer" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ flex: 1 }}>
    <FaSearch  style={{ color: '#000000', marginRight: '15px' ,fontSize:'20px'}} />
    < FaRegUser style={{ color: '#000000', marginRight: '15px',fontSize:'20px' }} />
    < FaShoppingCart  style={{ color: '#000000',fontSize:'20px' }} />
  </div>
</div>
   </div>
    );
  };

  return (
    <div className="container">
      <Navbar activeButton={activeButton} /> 
      <div className="centered">
        <img src={require('./img/banner.gif')} alt="Banner" style={{ width: '1460px',justifyContent: 'center' }} />
      </div>
    </div>
  );
}
export default Menu;
