import { StyleSheet } from 'react-native'; 


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
            borderColor: '#cccccc',
        },
        button: {
            paddingLeft: 15,
            paddingRight: 15,
            padding: 10,
            backgroundColor: '#FFAC2F',
            color: '#FFAC2F',
            border: 'none',
            borderRadius: 15,
            cursor: 'pointer',
        },
        buttonText: {
            fontSize: 18,
            color: 'white',
        }
    }
});