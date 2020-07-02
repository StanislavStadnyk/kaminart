import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';

import { handlerScrollToId } from 'other/utils';
import './BackToTop.scss';

const BackToTop = () => {
  const [isHidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > 50;
      setHidden(show);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const classes = classNames('BackToTop', {
    BackToTop__show: isHidden,
  });

  return (
    <Button
      outline
      color='primary'
      className={classes}
      onClick={() => handlerScrollToId('top-section', 0)}
    >
      <img src='/assets/icons/chevron-up.svg' width='24' alt='top' />
    </Button>
  );
};

export default BackToTop;
