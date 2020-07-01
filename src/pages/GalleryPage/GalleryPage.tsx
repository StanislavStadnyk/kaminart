import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FsLightbox from 'fslightbox-react';

import { categorySection_list } from 'other/translations/ru/common.json';
import DataJson from 'other/data.json';
import './GalleryPage.scss';

interface IGalleryPageProps {
  match: any;
  params: string;
}

interface IDataItemType {
  pathBig: string;
  title: string;
  pathSmall: string;
}

interface IDataGroupType {
  [key: string]: IDataItemType[];
}

const GalleryPage = ({
  match: {
    params: { url },
  },
}: IGalleryPageProps) => {
  const dataObj: IDataGroupType = DataJson;
  const dataArr: IDataItemType[] = dataObj[url];

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  const tranformatedArrForLightBox = dataArr.map((img: any) => {
    return `/assets/gallery${img.pathBig}`;
  });

  const currentDescription = categorySection_list.find((category) => {
    return category.url.substr(1) === url;
  });

  const galleryList = dataArr.map((item: IDataItemType, index: number) => {
    return (
      <Col md={3} sm={4} key={item.title + index}>
        <div className='CardBox'>
          <div
            onClick={() => openLightboxOnSlide(index + 1)}
            className='CardBox__link'
          >
            <div className='CardBox__img'>
              <img
                src={`/assets/gallery${item.pathSmall}`}
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
      <Container>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={tranformatedArrForLightBox}
          slide={lightboxController.slide}
        />

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
