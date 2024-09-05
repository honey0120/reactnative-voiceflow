import { StyleSheet } from 'react-native'; 
import { colours } from './theme';

export const cardButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: colours.white,
        borderTopWidth: 1,
        borderTopColor: colours.accent,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: colours.cardButtonFontColour,
        paddingTop: 10,
        paddingBottom: 10,
    }
});