import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Luminary | Premium E-Commerce',
  description:
    'Discover and shop the latest electronics, gadgets, and tech gear on Luminary. Enjoy secure checkout, fast shipping, and premium product selection.',
  keywords:
    'luminary, electronics, premium, gadgets, smartphones, laptops, online shopping, tech store'
};

export default Meta;
