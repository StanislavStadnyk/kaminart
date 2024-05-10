import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

import { TELEGRAM, LOGO, TEL, EMAIL } from 'other/constants';
import { linkAndSmooth } from 'other/utils';
import './Footer.scss';
import {PROD_URL} from "../../config";

const Footer = () => {
  let history = useHistory();

  return (
    <footer className='Footer'>
      <Container fluid={true}>
        <Link
          to={PROD_URL}
          className='Logo'
          onClick={() => linkAndSmooth(history, '/', 'top-section')}
        >
          <img src='/kaminart/assets/logo.png' width={90} alt={LOGO} />
        </Link>

        <ul className='Footer__contacts'>
          <li>
            <a href={`tel:${TEL.tel}`}>
              <img src='/kaminart/assets/icons/phone.svg' width='22' alt={TEL.preview} />
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>
              <img src='/kaminart/assets/icons/mail.svg' width='30' alt={EMAIL} />
            </a>
          </li>
          <li>
            <a href={`tg://resolve?domain=${TELEGRAM.id}`}>
              <img
                src='/kaminart/assets/icons/telegram.svg'
                width='24'
                alt={TELEGRAM.name}
              />
            </a>
          </li>
          {/* <li>
            <a href={INSTAGRAM_URL} target='_blank' rel='noopener noreferrer'>
              <img
                src='/kaminart/assets/icons/instagram.svg'
                width='24'
                alt={INSTAGRAM_URL}
              />
            </a>
          </li> */}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
