import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className="SectionContainer">
      <h2 className="title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


export default Section;