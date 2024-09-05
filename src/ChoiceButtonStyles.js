import { StyleSheet } from 'react-native'; 
import { colours } from './theme';

export const choiceButtonStyles = StyleSheet.create({
    choice: {
        button: {
            backgroundColor: colours.white,
            borderWidth: 2,
            borderColor: colours.primary,
            borderRadius: 20,
            cursor: 'pointer',
            alignSelf: 'flex-start',
            marginBottom: 5,
            marginLeft: 10,
            marginRight: 10,
            padding: 10
        },
        buttonText: {
            fontSize: 16,
            color: colours.primary

        }
    }
});