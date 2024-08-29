import React from 'react';
import { View, Pressable, Text } from "react-native";
import PropTypes from 'prop-types';
import { buttonsStyles } from './ButtonsStyles';

const ButtonBox = ({choices}) => {
  return (
    <View>
      {Object.keys(choices).map((key, index) => (
        <View style={buttonsStyles.choice.button}>
            <Pressable key={index} onClick={() => {
                choices[key].handler(choices[key]);
            }}>
                <Text style={buttonsStyles.choice.buttonText}>{choices[key].name}</Text>
            </Pressable>
        </View>
      ))}
    </View>
  );
};

ButtonBox.propTypes = {
  choices: PropTypes.object,
};

export {ButtonBox};