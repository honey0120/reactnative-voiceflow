import React from 'react';
import { View, Button } from "react-native";
import PropTypes from 'prop-types';

const ButtonBox = ({choices}) => {
  return (
    <View className='choice-wrapper'>
      {Object.keys(choices).map((key, index) => (
        <Button className="choice-button" key={index} onClick={() => {
          choices[key].handler(choices[key]);
        }}>
          {choices[key].name}
        </Button>
      ))}
    </View>
  );
};

ButtonBox.propTypes = {
  choices: PropTypes.object,
};

export {ButtonBox};