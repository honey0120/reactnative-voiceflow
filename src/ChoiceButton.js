import React from 'react';
import { View, Pressable, Text } from "react-native";
import PropTypes from 'prop-types';
import { choiceButtonStyles } from './ChoiceButtonStyles';

const ChoiceButton = ({choices}) => {
  return (
    <View>
      {Object.keys(choices).map((key, index) => (
        <View style={choiceButtonStyles.choice.button}>
            <Pressable key={index} onClick={() => {
                choices[key].handler(choices[key]);
            }}>
                <Text style={choiceButtonStyles.choice.buttonText}>{choices[key].name}</Text>
            </Pressable>
        </View>
      ))}
    </View>
  );
};

ChoiceButton.propTypes = {
  choices: PropTypes.object,
};

export {ChoiceButton};