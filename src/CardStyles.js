import { StyleSheet } from 'react-native'; 
import { colours } from './theme';

export const cardStyles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    backgroundColor: colours.white,
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 10,
    width: 250,
    shadowColor: colours.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 20,  
    elevation: 5, // for Android - idk what this would look like
    borderRadius: 20,
  },
  textBox: {
    borderBottomColor: colours.accent,
    borderLeftColor: colours.accent,
    borderRightColor: colours.accent,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    descriptionText: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom:15,
        fontSize: 16,
        color: colours.black
    },
    titleText: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 500, //~400 is normal
        color: colours.primary
    }
  }
});