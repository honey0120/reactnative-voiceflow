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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 20,  
    elevation: 5, // for Android - idk what this would look like
    borderRadius: 20,
  },
  textBox: {
    borderBottomColor: '#cccccc',
    borderLeftColor: '#cccccc',
    borderRightColor: '#cccccc',
    padding: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    descriptionText: {
        fontSize: 16,
        color: '#454545'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 500, //~400 is normal
        color: '#FFAC2F'
    }
  }
});