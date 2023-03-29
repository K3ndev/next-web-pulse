import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function ArrowDownSvg(props) {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5v14m6-6l-6 6m-6-6l6 6"
      />
    </svg>
  );
}
