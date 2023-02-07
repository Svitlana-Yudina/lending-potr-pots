import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__background"></div>
      <div className="header__title">
        <a href="/" className="main__link">POTR POTS</a>

        <nav className="navigation">
          <a href="#features" className="navigation__link">Features</a>
          <a href="#about_us" className="navigation__link">About us</a>
          <a href="#materials" className="navigation__link">Materials</a>
          <a href="#message_us" className="navigation__link">Message us</a>
        </nav>

        <a href="#message_us" className="basket__link"></a>
        <a href="#" className="menu"></a>
      </div>
      <div className="header__content">
        <div className="promo-text">
          POTR ~ Eco,<br/>
          self-watering,<br/>
          origami plant<br/>
          pots
        </div>
        <div className="promo-buy">
          <p className="promo-buy__price">$ 7,50</p>
          <p className="promo-buy__description">Get the second order in half price</p>
        </div>
        <button type="button" className="buy-button">Buy now</button>
      </div>
    </div>
  );
};
