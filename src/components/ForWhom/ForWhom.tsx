import React from 'react';
import './ForWhom.scss';
import '../../utils/grid.scss';

export const ForWhom: React.FC = () => (
  <section className="forWhom" id="forWhom">
    <h1 className="forWhom__title">
      For whom?
    </h1>

    <article className="forWhom__article about grid">
      <img src="pot1.png" alt="pot 1" className="about__image" />
      <div className="grid__item--desktop_8-5 grid__item--tablet_4-3">
        <p className="about__number">1</p>
        <h2 className="about__title">
          For those who value durable things
        </h2>
        <p className="about__description">
          Don&apos;t worry if you happen to knock your POTR on the floor, unlike a traditional ceramic pot it will take the fall in its stride.
        </p>
      </div>
    </article>

    <div className="forWhom__container">
      <article className="grid__item--desktop_2-4 forWhom__article forWhom__article--second about grid">
        <img src="pot2.png" alt="pot 2" className="about__image about__image--second grid__item--desktop_2-11" />
        <div className="grid__item--desktop_2-11 grid__item--tablet_1-3">
          <p className="about__number about__number--second">2</p>
          <h2 className="about__title">
            For those who love modern design
          </h2>
          <p className="about__description">
            We strived to achieve something that would look beautiful in your home while being incredibly functional and intuitive to use.
          </p>
        </div>      
      </article>

      <article className="grid__item--desktop_8-5 forWhom__article forWhom__article--third about grid">
        <img src="pot3.png" alt="pot 3" className="about__image about__image--third grid__item--desktop_1-12" />
        <div className="grid__item--tablet_4-3 grid__item--desktop_3-10">
          <p className="about__number">3</p>
          <h2 className="about__title">
            For those who don&apos;t have enough time to regular water indoor plants
          </h2>
          <p className="about__description">
            Water is drawn up through the cotton by the plant using tried and tested wicking technology. It&apos;s particularly useful if you aren&apos;t able to water them yourself on a regular basis! 
          </p>
        </div>
      </article>
    </div>

    {/* <article className="forWhom__article forWhom__article--second about grid">
      <img src="pot2.png" alt="pot 2" className="about__image about__image--second" />
      <div className="grid__item--desktop_8-5 grid__item--tablet_1-3">
        <p className="about__number about__number--second">2</p>
        <h2 className="about__title">
          For those who love modern design
        </h2>
        <p className="about__description">
          We strived to achieve something that would look beautiful in your home while being incredibly functional and intuitive to use.
        </p>
      </div>      
    </article>

    <article className="forWhom__article about grid">
      <img src="pot3.png" alt="pot 3" className="about__image about__image--third" />
      <div className="grid__item--desktop_8-5 grid__item--tablet_4-3">
        <p className="about__number">3</p>
        <h2 className="about__title">
          For those who don&apos;t have enough time to regular water indoor plants
        </h2>
        <p className="about__description">
          Water is drawn up through the cotton by the plant using tried and tested wicking technology. It&apos;s particularly useful if you aren&apos;t able to water them yourself on a regular basis! 
        </p>
      </div>
    </article> */}
  </section>
);
