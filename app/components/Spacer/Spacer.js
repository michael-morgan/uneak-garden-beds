import React from 'react';
import PropTypes from 'prop-types';

function Spacer(props) {
  const value = (props.value / 2) || 0;
  return (
    <div style={{ padding: `${value}em 0 ${value}em 0` }} />
  );
}

Spacer.propTypes = {
  value: PropTypes.number,
};

export default Spacer;
