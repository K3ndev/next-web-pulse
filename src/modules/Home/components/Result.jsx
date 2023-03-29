import React from 'react';
// import { useQuery } from '@tanstack/react-query';

function Result(props) {
  const { url } = props;

  //   const fetchResult = async (URL) => {
  //     const res = await fetch(`http://localhost:3000/api?url=${URL}`);
  //     const DATA = await res.json();
  //     return DATA;
  //   };

  return <div>Result {url}</div>;
}

export default Result;
