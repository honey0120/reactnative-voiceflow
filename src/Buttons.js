import React from 'react';
import PropTypes from 'prop-types';

const ButtonBox = ({choices}) => {
  return (
    <div className='choice-wrapper'>
      {Object.keys(choices).map((key, index) => (
        <button className="choice-button" key={index} onClick={() => {
          choices[key].handler(choices[key]);
        }}>
          {choices[key].name}
        </button>
      ))}
    </div>
  );
};

ButtonBox.propTypes = {
  choices: PropTypes.object,
};

export {ButtonBox};