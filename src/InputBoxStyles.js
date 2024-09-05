import { StyleSheet } from 'react-native'; 
import { colours } from './theme';


export const inputBoxStyles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        
        input: {
            flex: 1,
            padding: 8,
            borderWidth: 2,
            borderRadius: 15,
            fontSize: 18,
            borderColor: colours.accent,
        },
        button: {
            paddingLeft: 15,
            paddingRight: 15,
            padding: 10,
            backgroundColor: colours.primary,
            color: colours.primary,
            border: 'none',
            borderRadius: 15,
            cursor: 'pointer',
        },
        buttonText: {
            fontSize: 18,
            color: colours.white,
        }
    }
});