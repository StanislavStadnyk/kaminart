import React from 'react';
import { Trans } from 'react-i18next';

import './About.scss';

const About = () => {
  return (
    <section className='About container-fluid' id='about-section'>
      <h1>
        <Trans i18nKey='aboutSection_title'>
          “КаминАрт” – тепло и уют в Вашем доме
        </Trans>
      </h1>
      <p>
        <Trans i18nKey='aboutSection_text'>
          Здравствуйте. Наша компания работает в городе Харькове с 1995 года.
          Все это время, несмотря на кризисы, мы плодотворно работали в области
          проектирования, строительства и реконструкции каминов. Тесное
          сотрудничество с профессиональными дизайнерами и архитекторами
          позволило поднять наши изделия на высокий уровень, отвечающий
          современным техническим и эстетическим требованиям.
        </Trans>
      </p>

      <h1>Профессионализм и многолетний опыт</h1>

      <div className='About__info'>
        <h2>
          <Trans i18nKey='aboutSection_subText'>
            Элитные камины всех стилей и <br /> направлений на заказ
          </Trans>
        </h2>
      </div>
    </section>
  );
};

export default About;
