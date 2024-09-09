import React from 'react';
import { View, Pressable, Text } from "react-native";
import PropTypes from 'prop-types';
import { cardButtonStyles } from './CardButtonStyles';
import useOpenURLInBrowser from './hooks/useOpenUrlInBrowser';

const CardButton = ({buttons, userSendAction}) => {
    const openURLInBrowser = useOpenURLInBrowser();

    const handleActions = (button) => {
      const userAction = {type: button.request.type, payload: button.request.payload};
      userSendAction(null, userAction);
  };

    const handleOpenURL = (actions) => {
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
                handleOpenURL(buttons[key].request.payload.actions)
                handleActions(buttons[key])
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