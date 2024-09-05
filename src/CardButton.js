import React from 'react';
import { View, Pressable, Text } from "react-native";
import PropTypes from 'prop-types';
import { cardButtonStyles } from './CardButtonStyles';
import useOpenURLInBrowser from './hooks/useOpenUrlInBrowser';

const CardButton = ({buttons}) => {
    const openURLInBrowser = useOpenURLInBrowser();

    const handleActions = (actions) => {
        if (Array.isArray(actions) && actions.length != 0) {
          actions.forEach((action) => {
            //To-do: Handle other actions
            if (action.payload.url) {
                openURLInBrowser(action.payload.url);
            }
          });
        }
      };

  return (
    <View>
      {Object.keys(buttons).map((key, index) => (
        <View style={cardButtonStyles.button} key={index}>
            <Pressable key={index} onPress={() => {
                console.log("Card Button Pressed");
                //To-do: Call to actionHandler function
                handleActions(buttons[key].request.payload.actions)
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