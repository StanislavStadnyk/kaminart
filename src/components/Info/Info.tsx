import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Trans } from 'react-i18next';

import { categorySection_list } from 'other/translations/ru/common.json';
import CardBox from 'components/CardBox/CardBox';
import './Info.scss';

const Info = () => {
  const bbq = categorySection_list[5];
  const modern = categorySection_list[1];

  return (
    <section className='Info'>
      <Container fluid={true}>
        <Row>
          {CardBox(bbq)}
          {CardBox(modern)}
          <Col md={4}>
            <div className='Info__box'>
              <h4>
                <Trans i18nKey='infoSection_title'>
                  Изготовление и установка <br />(
                  <strong>камины Харьков</strong>)
                </Trans>
              </h4>
              <p>
                <Trans i18nKey='infoSection_text'>
                  Согласно вашим пожеланиям выбирается натуральный камень, из
                  которого в дальнейшем будет изготовлен камин. Цены на
                  изготовление мраморной облицовки минимальны, так как мы
                  работаем без посредников. Мы выполняем все монтажные работы
                  «под ключ».
                </Trans>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
