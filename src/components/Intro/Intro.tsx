import React from 'react';
import { Container } from 'reactstrap';
import { Trans } from 'react-i18next';

import './Intro.scss';

const Intro = () => {
  return (
    <section className='Intro'>
      <Container fluid={true}>
        <h1>
          <Trans i18nKey='introSection_title'>
            Камины для дома, дачи и квартиры
          </Trans>
        </h1>
      </Container>
    </section>
  );
};

export default Intro;
