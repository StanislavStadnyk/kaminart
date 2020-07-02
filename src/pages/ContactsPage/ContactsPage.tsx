import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './ContactsPage.scss';

const ContactsPage = () => {
  return (
    <section className='ContactsPage'>
      <Container fluid={true}>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <header className='ContactsPage__header'>
              <h1>Контакты</h1>
            </header>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactsPage;
