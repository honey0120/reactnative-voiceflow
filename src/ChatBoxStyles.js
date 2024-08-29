import { StyleSheet } from 'react-native'; 


export const chatBoxStyles = StyleSheet.create({
    chatbox: {
      flex: 1,
      padding: 10,
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
          padding: 10,
          borderRadius: 20,
          backgroundColor: '#FFAC2F',
          alignSelf: 'flex-end',
          text: {
              fontSize: 16,
              color: 'white'
          }
      },
      received: {
          marginBottom: 5,
          padding: 10,
          borderRadius: 20,
          backgroundColor: '#f2f2f2',
          alignSelf: 'flex-start',
          text: {
              fontSize: 16,
              color: '#454545'
          }
      },
  },
  vfImage: {
      width: 300,
      height: 300,
  }
});