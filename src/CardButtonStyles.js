import { StyleSheet } from 'react-native'; 

export const cardButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        marginTop: 10,
        borderTopColor: '#cccccc',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#3D81E2',
        paddingTop: 10,
        paddingBottom: 10,
    }
});