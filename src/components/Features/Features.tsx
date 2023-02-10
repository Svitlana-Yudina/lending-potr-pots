import React from 'react';
import './Features.scss';

export const Features: React.FC = () => (
  <section className="features" id="features">
    <h1 className="features__title promo-text promo-text--big">
      <span className="colored">POTR Pots </span>
      Features
    </h1>

    <div className="features__content">
      <article className="features__article feature">
        <img
          src="blue_feature.png"
          alt="feature 1"
          className="feature__image"
        />
        <h2 className="feature__title">
        Flat pack postage
        </h2>
        <p className="feature__description">
        The pots will be shipped flat packed so they
        can be slipped through your letter box
        </p>
      </article>

      <article className="features__article feature">
      <img
          src="orange_feature.png"
          alt="feature 1"
          className="feature__image"
        />
        <h2 className="feature__title">
        Easy assembly
        </h2>
        <p className="feature__description">
        POTR Pots are super easy (and super satisfying)
        to assemble using the quick draw cotton cord
        </p>
      </article>

      <article className="features__article feature">
      <img
          src="yellow_feature.png"
          alt="feature 1"
          className="feature__image"
        />
        <h2 className="feature__title">
        Self-watering
        </h2>
        <p className="feature__description">
        Simply add water into the pot - if your plant
        is thirsty it will automatically start drinking
        the water through the cotton cord. Magic!
        </p>
      </article>
    </div>
  </section>
);
