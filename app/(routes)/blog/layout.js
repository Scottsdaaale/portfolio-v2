import React from 'react';

import Header from '../../components/global/Header';

function layout({ children }) {
  return <div className='mx-auto max-w-[500px]'>{children}</div>;
}

export default layout;
