import { StyleSheet } from 'react-native'; 

export const cardStyles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 10,
    width: 250,
  },
  textBox: {
    borderBottomColor: '#FFAC2F',
    borderLeftColor: '#FFAC2F',
    borderRightColor: '#FFAC2F',
    padding: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    text: {
        fontSize: 16,
        color: '#454545'
    }
  }
});