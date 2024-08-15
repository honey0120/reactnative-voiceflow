import React from 'react';
import { View, Button, Image, Text } from "react-native";
import './ChatBox.css'; // Import CSS file for styling
import PropTypes from 'prop-types';
import {ButtonBox} from './Buttons';
import TypingIndicator from './TypingIndicator';
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      chatbox: {
        flex: 1,
        padding: 10,
        paddingBottom: 50,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
      },
      message: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 20,
        marginBottom: 5,
        alignSelf: 'flex-start',
        sent: {
            backgroundColor: '#FFAC2F',
            color: '#fff',
            alignSelf: 'flex-end',
        },
        received: {
            backgroundColor: '#f2f2f2',
            color: '#000',
            alignSelf: 'flex-start',
        },
        messageLine: {
            padding: 10,
            fontSize: 'larger',
        }
    }
  });

const prepMessageSent = (message) => {
  return (
    <View>
      {message.split('\n').map((line, i) => {
        return line ? <View className='messageLine' key={i}><Text>{line}</Text></View>: null;
      })}
    </View>
  );
};

const prepMessageRecieved = (trace) => {
  if (trace.type === 'text') {
    return (
      <View>
        {trace.payload.message.split('\n').map((line, i) => {
          return line ? <View style={styles.messageLine} key={i}><Text>{line}</Text></View>: null;
        })}
      </View>
    );
  } else if (trace.type === 'visual') {
    if (trace.payload.visualType === 'image') {
      return (
        <Image className="vf-image"
          src={trace.payload.image} alt="VF Image"
        />
      );
    } else {
      return (
        <View>
          <Text>{JSON.stringify(trace)}</Text>
        </View>
      );
    }
  } else if (trace.type === 'color_text') {
    return (
      <View className='messageLine' style={{color: trace.payload.color}}>
        <Text>{trace.payload.text}</Text>
      </View>
    );
  } else if (
    trace.type === 'choice' ||
    trace.type === 'path' ||
    trace.type === 'suggest_question_buttons'
  ) {
    return (null);
  } else {
    return (
      <View>
        <Text>{JSON.stringify(trace)}</Text>
      </View>
    );
  }
};

const ChatBox = ({messages, choices, isAwaitingResponse}) => {

  return (
    <View style={styles.chatbox}>
      {messages.map((message, index) => (
        message.sender === 'user' ? (
          <View style={styles.message.sent} key={index}>
            {prepMessageSent(message.content)}
          </View>
        ) : (
          prepMessageRecieved(message.content) === null ? null :
            <View style={styles.message.received} key={index}>
              {prepMessageRecieved(message.content)}
            </View>
        )
      ))}
      {isAwaitingResponse ?
      <View style={styles.message.received}>
        <TypingIndicator />
      </View> : null}
      <ButtonBox choices={choices} />
    </View>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  choices: PropTypes.object,
  isAwaitingResponse: PropTypes.bool,
};

export default ChatBox;