import React from 'react';
import { Trans } from 'react-i18next';
import { Nav, NavItem, Container } from 'reactstrap';
import { NavLink, useHistory, Link } from 'react-router-dom';

import { categorySection_list } from 'other/translations/ru/common.json';
import { linkAndSmooth } from 'other/utils';
import './Navigation.scss';

interface INavigationProps {
  toggle: () => void;
}

const Navigation = ({ toggle }: INavigationProps) => {
  let history = useHistory();

  const offSet = () => {
    return window.screen.availWidth > 767 ? -200 : -100;
  };

  const dropDownLinks = categorySection_list.map((link, index) => {
    return (
      <li key={link.title + index}>
        <Link to={`/gallery${link.url}`} onClick={toggle}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <div className='Navigation'>
      <Container fluid={true}>
        <Nav navbar>
          <NavItem>
            <NavLink
              to='/'
              className='nav-link'
              exact
              onClick={() => linkAndSmooth(history, '/', 'top-section')}
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
              to='/'
              className='nav-link'
              onClick={() =>
                linkAndSmooth(history, '/', 'about-section', offSet())
              }
            >
              О нас
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
};

export default Navigation;
