import React from 'react';
import PropTypes from 'prop-types';

export default class SelectionAnimation extends React.Component {
  render() {
    const {
      props: { animateWidth }
    } = this;
    return (
      <span className="test1234"
        style={{
          width: animateWidth,
          background: '#FFF',
          position: 'absolute',
          height: '100%',
          right: 0,
          top: 0,
          display: 'block',
          transition: 'width .3s'
        }}
      >
      </span>
    );
  }
}
