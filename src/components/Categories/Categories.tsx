import React, { ReactNode } from 'react';
import { Container, Row } from 'reactstrap';

import { categorySection_list } from 'other/translations/ru/common.json';
import CardBox from 'components/CardBox/CardBox';
import './Categories.scss';

const Categories = () => {
  const list: Array<ReactNode> = categorySection_list.map(CardBox);

  return (
    <Container fluid={true} className='Categories'>
      <Row>{list}</Row>
    </Container>
  );
};

export default Categories;
