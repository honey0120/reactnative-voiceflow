import { StyleSheet } from 'react-native'; 

export const choiceButtonStyles = StyleSheet.create({
    choice: {
        button: {
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#FFAC2F',
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
            color: '#FFAC2F'

        }
    }
});