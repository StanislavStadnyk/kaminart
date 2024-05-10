import React from 'react';
import { Trans } from 'react-i18next';
import { Container } from 'reactstrap';

import './NotFoundPage.scss';

const NotFoundPage = () => (
  <Container fluid={true}>
    <div className='NotFoundPage'>
      <div className='NotFoundPage__holder'>
        <img src='/kaminart/assets/gif404.gif' alt='404' />
        <div>
          <h3>404</h3>
          <p>
            <Trans i18nKey='notFoundPage_text'>Страница не найдена!</Trans>
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default NotFoundPage;
