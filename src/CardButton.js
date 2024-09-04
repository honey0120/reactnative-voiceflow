import React from 'react';
import { View, Pressable, Text } from "react-native";
import PropTypes from 'prop-types';
import { cardButtonStyles } from './CardButtonStyles';

const CardButton = ({buttons}) => {
  return (
    <View>
      {Object.keys(buttons).map((key, index) => (
        <View style={cardButtonStyles.button} key={index}>
            <Pressable key={index} onPress={() => {
                console.log("Card Button Pressed");
                //To-do: Check which action to use
    
                //To-do: Call to actionHandler function
                //buttons[key].handler(choices[key]);
            }}>
                <Text style={cardButtonStyles.buttonText}>{buttons[key].name}</Text>
            </Pressable>
        </View>
      ))}
    </View>
  );
};

CardButton.propTypes = {
  buttons: PropTypes.array,
};

export {CardButton};