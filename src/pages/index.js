import React from 'react';

const AsyncHome = React.lazy(() => import('../modules/Home/index'));

export default function Home() {
  return <AsyncHome />;
}
