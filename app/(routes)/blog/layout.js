import React from 'react';

import Header from '../../components/global/Header';

function layout({ children }) {
  return <div className='px-2 xs:px-0 mx-auto max-w-[500px]'>{children}</div>;
}

export default layout;
