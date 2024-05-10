import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './CardBox.scss';
import {PROD_URL} from "../../config";

interface IItemProps {
  url: string;
  img: string;
  title: string;
  text: string;
}

const CardBox = (item: IItemProps) => {
  const { url, img, title, text } = item;

  return (
    <Col md={4} sm={6} key={text}>
      <div className='CardBox'>
        <Link to={`${PROD_URL}/gallery${url}`} className='CardBox__link'>
          <div className='CardBox__img'>
            <img src={`/kaminart/assets/categories/${img}`} alt={title} width='100%' />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </Link>
      </div>
    </Col>
  );
};

export default CardBox;
