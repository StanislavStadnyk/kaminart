import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

import { INSTAGRAM_URL, LOGO, TEL, EMAIL } from 'other/constants';
import { linkAndSmooth } from 'other/utils';
import './Footer.scss';

const Footer = () => {
  let history = useHistory();

  return (
    <footer className='Footer'>
      <Container fluid={true}>
        <Link
          to='/'
          className='Logo'
          onClick={() => linkAndSmooth(history, '/', 'top-section')}
        >
          <img src='/assets/logo.png' alt={LOGO} width='100' />
        </Link>

        <ul className='Footer__contacts'>
          <li>
            <a href={`tel:${TEL}`}>
              <img src='/assets/icons/phone.svg' width='22' alt={TEL} />
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>
              <img src='/assets/icons/mail.svg' width='30' alt={EMAIL} />
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target='_blank' rel='noopener noreferrer'>
              <img
                src='/assets/icons/instagram.svg'
                width='24'
                alt={INSTAGRAM_URL}
              />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
