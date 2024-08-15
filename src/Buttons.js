import React from 'react';
import { View, Pressable, StyleSheet, Text } from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    choice: {
        button: {
            margin: 5,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#FFAC2F',
            borderRadius: 20,
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            fontSize: 16,
            color: '#FFAC2F',
            paddingTop: 10,
            paddingBottom: 10,

        }
    }
});

const ButtonBox = ({choices}) => {
  return (
    <View>
      {Object.keys(choices).map((key, index) => (
        <View style={styles.choice.button}>
            <Pressable key={index} onClick={() => {
                choices[key].handler(choices[key]);
            }}>
                <Text style={styles.choice.buttonText}>{choices[key].name}</Text>
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