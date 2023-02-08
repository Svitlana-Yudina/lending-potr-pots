import React from 'react';
import './Header.scss';
import '../utils/grid.scss';

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
      <div className="header__content grid">
        <img 
          src="header_pot.png"
          alt="small pot"
          className="header__image"
        />
        <div className="promo-text grid__item--desktop_2-12 grid__item--tablet_1-6">
          POTR ~ Eco,<br/>self-
          <span className="colored">watering,<br/>origami </span>
          plant<br/>
          <span className="colored">pots</span>
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
