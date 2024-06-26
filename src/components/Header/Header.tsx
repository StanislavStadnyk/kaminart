import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

import { LOGO, TEL } from 'other/constants';
import Navigation from 'components/Navigation/Navigation';
import { linkAndSmooth } from 'other/utils';
import './Header.scss';
import {PROD_URL} from "../../config";

const Header = () => {
  let history = useHistory();

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const closeNavbar = () => setCollapsed(true);

  return (
    <Navbar color='faded' light expand='md'>
      <header className='Header'>
        <Container fluid={true}>
          <Row>
            <Col sm={6} md={6}>
              <Link
                to={PROD_URL}
                className='Header__logo'
                onClick={() => linkAndSmooth(history, '/', 'top-section')}
              >
                <img src='/kaminart/assets/logo.png' width={150} alt={LOGO} />
              </Link>
            </Col>

            <Col sm={6} md={6} className='Header__contacts d-none d-md-flex'>
              <img src='/kaminart/assets/icons/phone.svg' width='24' alt='' />
              <a href={`tel:${TEL.tel}`}>{TEL.preview}</a>
            </Col>
          </Row>
        </Container>
      </header>

      <NavbarToggler onClick={toggleNavbar} />

      <Collapse isOpen={!collapsed} navbar>
        <Navigation closeNavbar={closeNavbar} />
      </Collapse>
    </Navbar>
  );
};

export default Header;
