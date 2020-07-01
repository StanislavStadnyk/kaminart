import { scroller } from 'react-scroll';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

export const handlerScrollToId = (
  scrollToId: string,
  scrollOffset: number | undefined,
  event?: any
) => {
  event && event.preventDefault();
  scroller.scrollTo(scrollToId, {
    duration: 800,
    delay: 0,
    offset: scrollOffset || 0,
    smooth: 'easeInOutQuart',
  });
};

export const linkAndSmooth = (
  history: any,
  link: string,
  section: string,
  offSet?: any
) => {
  history.push(link);
  setTimeout(() => handlerScrollToId(section, offSet || 0), 0);
};

const ScrollToTop = ({ location }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default withRouter(ScrollToTop);
