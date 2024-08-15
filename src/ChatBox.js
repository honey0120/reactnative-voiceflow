import React from 'react';
import { View, ScrollView, Image, Text } from "react-native";
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
        sent: {
            marginBottom: 5,
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#FFAC2F',
            alignSelf: 'flex-end',
        },
        received: {
            marginBottom: 5,
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#f2f2f2',
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
        return line ? <View style={styles.messageLine} key={i}><Text style={{color: 'white'}}>{line}</Text></View>: null;
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
    <ScrollView style={styles.chatbox}>
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
    </ScrollView>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  choices: PropTypes.object,
  isAwaitingResponse: PropTypes.bool,
};

export default ChatBox;