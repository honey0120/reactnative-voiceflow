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

const prepMessageSent = (message) => {
  return (
    <View>
      {message ? <View>
                <Text style={styles.message.sent.text}>{message}</Text>
            </View>: null
        }
    </View>
  );
};

const prepMessageRecieved = (trace) => {
  if (trace.type === 'text') {
    return (
      <View>
        {trace.payload.message ? <View>
                <Text style={styles.message.received.text}>{trace.payload.message}</Text>
            </View>: null
        }
      </View>
    );
  } else if (trace.type === 'visual') {
    if (trace.payload.visualType === 'image') {
        console.log(trace.payload.image)
      return (
        <Image style={styles.vfImage}
        source={{
            uri: `${trace.payload.image}`,
              }
          } alt="VF Image"
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
      <View style={{color: trace.payload.color}}>
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