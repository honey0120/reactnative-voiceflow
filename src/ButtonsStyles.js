import { StyleSheet } from 'react-native'; 

export const buttonsStyles = StyleSheet.create({
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