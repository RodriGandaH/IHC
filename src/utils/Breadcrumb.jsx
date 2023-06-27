import './Breadcrumd.css';
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {item.label}
            </a>            
            {index !== items.length - 1 && <span> &gt; </span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;