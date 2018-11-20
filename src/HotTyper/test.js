import React from 'react';
import MovingCursor from './index';

const wrapperStyle = {
  fontFamily: 'arial',
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
  padding: '20px',
};

class Test extends React.Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <div
          style={{
            maxWidth: '500px',
            display: 'flex',
            justifyContent: 'stretch'
          }}
        >
          <MovingCursor
            style={{ fontSize: 32 }}
            selectionColor={'#FFF'}
            text={[
              'Make your text animated TEST PAFKE',
              'Make your text elegent',
              'Make your text stylish',
              'Make your text stylish with ZERO effort from you ;).'
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Test;
