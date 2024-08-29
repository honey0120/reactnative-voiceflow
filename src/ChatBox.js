import React from 'react';
import { View, ScrollView, Image, Text } from "react-native";
import PropTypes from 'prop-types';
import {ButtonBox} from './Buttons';
import TypingIndicator from './TypingIndicator';
import { chatBoxStyles } from './ChatBoxStyles';

const prepMessageSent = (message) => {
  return (
    <View>
      {message ? <View>
                <Text style={chatBoxStyles.message.sent.text}>{message}</Text>
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
                <Text style={chatBoxStyles.message.received.text}>{trace.payload.message}</Text>
            </View>: null
        }
      </View>
    );
  } else if (trace.type === 'visual') {
    if (trace.payload.visualType === 'image') {
        console.log(trace.payload.image)
      return (
        <Image style={chatBoxStyles.vfImage}
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
    return (null); //rip Alex didn't handle the choice buttons
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
    <ScrollView style={chatBoxStyles.chatbox}>
      {messages.map((message, index) => (
        message.sender === 'user' ? (
          <View style={chatBoxStyles.message.sent} key={index}>
            {prepMessageSent(message.content)}
          </View>
        ) : (
          prepMessageRecieved(message.content) === null ? null :
            <View style={chatBoxStyles.message.received} key={index}>
              {prepMessageRecieved(message.content)}
            </View>
        )
      ))}
      {isAwaitingResponse ?
      <View style={chatBoxStyles.message.received}>
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