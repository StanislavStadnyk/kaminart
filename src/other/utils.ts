import { scroller } from 'react-scroll';

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
