import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import FsLightbox from 'fslightbox-react';

import { categorySection_list } from 'other/translations/ru/common.json';
import './GalleryPage.scss';
import {PROD_URL} from "../../config";

interface IGalleryPageProps {
  match: any;
  params: string;
}

interface IDataItemType {
  pathBig: string;
  title: string;
  pathSmall: string;
}

const GalleryPage = ({
  match: {
    params: { url },
  },
}: IGalleryPageProps) => {
  const [dataArr, setDataArr] = useState([]);
  const [dataSourceArr, setDataSourceArr] = useState([]);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  useEffect(() => {
    setDataSourceArr([]); // need to reset before fetching

    fetch(`${PROD_URL}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        const arr = data[url];
        setDataArr(arr);

        const tranformatedArrForLightBox = arr.map((img: any) => {
          return `/kaminart/assets/gallery${img.pathBig}`;
        });

        setDataSourceArr(tranformatedArrForLightBox);
      });
  }, [url]);

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  if (dataArr === undefined) {
    return <Redirect to='/404' />;
  }

  const currentDescription = categorySection_list.find((category) => {
    return category.url.substr(1) === url;
  });

  const galleryList = dataArr.map((item: IDataItemType, index: number) => {
    return (
      <Col md={3} sm={4} xs={6} key={item.title + index}>
        <div className='CardBox'>
          <div
            onClick={() => openLightboxOnSlide(index + 1)}
            className='CardBox__link'
          >
            <div className='CardBox__img'>
              <img
                src={`/kaminart/assets/gallery${item.pathSmall}`}
                alt=''
                width='100%'
              />
            </div>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <section className='GalleryPage'>
      <Container fluid={true}>
        {dataSourceArr && dataSourceArr.length > 0 && (
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={dataSourceArr}
            slide={lightboxController.slide}
          />
        )}

        {currentDescription && (
          <header className='GalleryPage__header'>
            <h1>{currentDescription.title}</h1>
            <p>{currentDescription.text}</p>
          </header>
        )}

        <Row>{galleryList}</Row>
      </Container>
    </section>
  );
};

export default GalleryPage;
