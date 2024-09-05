import { StyleSheet } from 'react-native'; 
import { colours } from './theme';


export const chatBoxStyles = StyleSheet.create({
    chatbox: {
      flex: 1,
      paddingBottom: 50,
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll',
      contentOffset: {x: 0, y: 100},
    },
    message: {
      sent: {
          marginBottom: 5,
          marginRight: 10,
          marginLeft: 10,
          padding: 10,
          borderRadius: 20,
          backgroundColor: colours.primary,
          alignSelf: 'flex-end',
          text: {
              fontSize: 16,
              color: colours.white
          }
      },
      received: {
          marginBottom: 5,
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
          borderRadius: 20,
          backgroundColor: colours.secondary,
          alignSelf: 'flex-start',
          text: {
              fontSize: 16,
              color: colours.black
          }
      },
  },
  vfImage: {
      width: 300,
      height: 300,
  }
});