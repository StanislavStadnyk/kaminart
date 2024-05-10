import React from 'react';
import { Trans } from 'react-i18next';
import { Nav, NavItem, Container } from 'reactstrap';
import { NavLink, useHistory, Link } from 'react-router-dom';

import { categorySection_list } from 'other/translations/ru/common.json';
import { linkAndSmooth } from 'other/utils';
import './Navigation.scss';
import {PROD_URL} from "../../config";

interface INavigationProps {
  closeNavbar: () => void;
}

const Navigation = ({ closeNavbar }: INavigationProps) => {
  let history = useHistory();

  const offSet = () => {
    return window.screen.availWidth > 767 ? -200 : -100;
  };

  const dropDownLinks = categorySection_list.map((link, index) => {
    return (
      <li key={link.title + index}>
        <NavLink to={`${PROD_URL}/gallery${link.url}`} onClick={closeNavbar}>
          {link.title}
        </NavLink>
      </li>
    );
  });

  return (
    <div className='Navigation'>
      <Container fluid={true}>
        <Nav navbar>
          <NavItem>
            <NavLink
              to={PROD_URL}
              className='nav-link'
              exact
              onClick={() => {
                linkAndSmooth(history, '/', 'top-section');
                closeNavbar();
              }}
            >
              <Trans i18nKey='navigation_main'>Главная</Trans>
            </NavLink>
          </NavItem>
          <NavItem>
            <span className='nav-link'>
              <Trans i18nKey='navigation_portfolio'>Наши работы</Trans>
            </span>

            <ul>{dropDownLinks}</ul>
          </NavItem>
          <NavItem>
            <Link
              to={PROD_URL}
              className='nav-link'
              onClick={() => {
                linkAndSmooth(history, '/', 'about-section', offSet());
                closeNavbar();
              }}
            >
              <Trans i18nKey='navigation_about'>О нас</Trans>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink
              to={`${PROD_URL}/contacts`}
              className='nav-link'
              onClick={() => {
                closeNavbar();
              }}
            >
              <Trans i18nKey='navigation_contacts'>Контакты</Trans>
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
};

export default Navigation;
