import React from 'react';
import { Trans } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import {
  INSTAGRAM_URL,
  TEL,
  VIBER,
  TELEGRAM,
  EMAIL,
  INSTAGRAM,
} from 'other/constants';
import './ContactsPage.scss';

const ContactsPage = () => {
  return (
    <section className='ContactsPage'>
      <Container fluid={true}>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <header className='ContactsPage__header'>
              <h1>
                <Trans i18nKey='navigation_contacts'>Контакты</Trans>
              </h1>
            </header>

            <ul className='ContactsPage__contacts'>
              <li>
                <img
                  src='/assets/icons/phone.svg'
                  width='22'
                  alt={TEL.preview}
                />
                <a href={`tel:${TEL.tel}`}>{TEL.preview}</a>
              </li>
              <li>
                <img src='/assets/icons/viber.svg' width='22' alt={VIBER} />
                <a href={`viber://chat?number=${TEL.tel}`}>{VIBER}</a>
              </li>
              <li>
                <img
                  src='/assets/icons/telegram.svg'
                  width='22'
                  alt={TELEGRAM.name}
                />
                <a href={`tg://resolve?domain=${TELEGRAM.id}`}>
                  {TELEGRAM.name}
                </a>
              </li>
              <li>
                <img src='/assets/icons/mail.svg' width='30' alt={EMAIL} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <img
                  src='/assets/icons/instagram.svg'
                  width='24'
                  alt={INSTAGRAM_URL}
                />
                <a
                  href={INSTAGRAM_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {INSTAGRAM}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactsPage;
