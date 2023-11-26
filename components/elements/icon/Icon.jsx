import React from "react";

export const Icon = ({ id, ...props }) => (
  <svg {...props}>
    <use className='fill-current' href={`/icons.svg#${id}`} />
  </svg>
);
