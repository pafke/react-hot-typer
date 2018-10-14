import React from 'react';
import MovingCursor from './index';

const wrapperStyle = {
  fontFamily: 'Comic Sans MS',
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
  padding: '20px',
  background:
    'url(https://avatars.mds.yandex.net/get-pdb/199965/8b8db02f-371c-4eb6-8b45-6a2ead5e44fa/orig) center no-repeat',
  backgroundSize: 'cover',
  boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
  boxSizing: 'border-box',
  textShadow: '-3px 3px 3px rgba(0,0,0,.7)'
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
            text={[
              'Make your text animated',
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
