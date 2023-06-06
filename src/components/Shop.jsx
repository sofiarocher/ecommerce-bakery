import React, { useEffect, useState } from 'react';
import products from "../data";
import "./Shop.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Shop() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const productsWithQuantity = products.map((product) => ({
      ...product,
      quantity: 0,
    }));

    setProductData(productsWithQuantity);
  }, []);

  const handleAdd = (id) => {
    setProductData(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1
          };
        }
        return product;
      });
    });
  };

  const handleRemove = (id) => {
    setProductData(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1
          };
        }
        return product;
      });
    });
  };

  return (
    <div className='shop__wrapper'>
      <div className='shop__container'>
      <h1 className="shop__title">
        Our Cakes
      </h1>
      <div className="cake__wrapper">
        {productData.map((product) => (
          <div className="cake__item" key={product.id}>
            <div className="cake__content">
              <div className="cake__image">
                <img src={product.image} alt="" />
              </div>
              <div className="cake__details">
                <h3 className="cake__title">{product.title}</h3>
                <p className='cake__desc'>{product.description}</p>
                <h6 className="cake__price">${product.price}</h6>
                <div className="cake__button">
                  <RemoveIcon
                    className='button__remove button'
                    onClick={() => handleRemove(product.id)}
                  />
                  <p className='cake__button--number'>{product.quantity}</p>
                  <AddIcon
                    className='button__add button'
                    onClick={() => handleAdd(product.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="shop__container--two">
        <h1 className="shop__title">
          Your Total
        </h1>
        <div className="shop__total">
          <h1>Your total is:</h1>
        </div>
    </div>
    </div>
  );
}

export default Shop;
