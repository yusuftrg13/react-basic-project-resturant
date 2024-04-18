import React from "react";
import "./SpecialFood.css";

import Corba_main from '../Images/corba.jpg'
import KÖFTE from '../Images/köfte.jpg'
import PİZZA from '../Images/pizza.jpg'
import HotDog from '../Images/hotdog.jpg'
import KARİDES from '../Images/ıstakoz.jpg'

const SpecialFood = () => {
  return (
    <div className="special-dishes-section">
      <h2 className="special-dishes-heading">L O U V R E  S P E C İ AL </h2>
      <div className="special-dish-images">
        {/* Altı adet resim için aşağıdaki örnek resim kodlarını kullanabilirsiniz */}
        <div className="special-dish-image">
        <img src={Corba_main } alt='Main' className='image-main'/>

        </div>

        <div className="special-dish-image">
        <img src={KÖFTE} alt='Main' className='image-main'/>

        </div>


        <div className="special-dish-image">
        <img src={PİZZA } alt='Main' className='image-main'/>

        </div>


        <div className="special-dish-image">
        <img src={HotDog} alt='Main' className='image-main'/>

        </div>


        <div className="special-dish-image">
        <img src={KARİDES} alt='Main' className='image-main'/>

        </div>
    
      </div>
    </div>
  );
};

export default SpecialFood;
