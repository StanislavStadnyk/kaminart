import React from 'react';

import data from 'other/data.json';

const GalleryPage = ({
  match: {
    params: { url },
  },
  history,
}: any) => {
  // @ts-ignore
  console.log('GalleryPage', history, data[url]);

  // @ts-ignore
  const arr = data[url];

  return (
    <>
      <ul>
        {arr.map((item: any) => {
          return (
            <li key={item.title}>
              <img src={`/assets/gallery${item.pathSmall}`} alt='' />
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GalleryPage;
