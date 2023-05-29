import React, {useEffect, useState} from 'react'
import "./Cards.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import products from "../data"
import { Link } from 'react-router-dom';


function Cards() {
    const [productData, setProductData] = useState([]);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
  
    useEffect(() => {
      setProductData(products);
    }, []);
  
    useEffect(() => {
      const carousel = document.querySelector('.carousel');
      const handleScroll = () => {
        setShowLeftArrow(carousel.scrollLeft > 0);
        setShowRightArrow(
          carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth
        );
      };
  
      carousel.addEventListener('scroll', handleScroll);
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleIconClick = (direction) => {
      const carousel = document.querySelector('.carousel');
      const cardWidth = carousel.querySelector('.carousel-item').clientWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
  
    return (
      <div className="card__container">
        <div className="card__wrapper">
          {showLeftArrow && (
            <KeyboardArrowLeftIcon
              className="icon icon-left"
              id="left"
              onClick={() => handleIconClick('left')}
            />
          )}
          <div className="carousel">
            {productData.map((product) => (
              <div className="carousel-item" key={product.id}>
                <img src={product.image} alt="" />
                <div className="cake__description">
                    <div>
                        <h3 className="cake__title">{product.title}</h3>
                        <h6 className="cake__price">${product.price}</h6>
                    </div>
                    <div className="cake__cart">
                       <Link to="/shop"><ShoppingCartIcon /></Link>
                    </div>
                    </div>
              </div>
            ))}
          </div>
          {showRightArrow && (
            <KeyboardArrowRightIcon
              className="icon icon-right"
              id="right"
              onClick={() => handleIconClick('right')}
            />
          )}
        </div>
      </div>
    );
  }
  
  export default Cards;