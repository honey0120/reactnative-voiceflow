import React from 'react';
import { View, Button, Image, Text } from "react-native";
import './ChatBox.css'; // Import CSS file for styling
import PropTypes from 'prop-types';
import {ButtonBox} from './Buttons';
import TypingIndicator from './TypingIndicator';

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
          return line ? <View className='messageLine' key={i}><Text>{line}</Text></View>: null;
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
  const boxRef = React.useRef(null);

//   React.useEffect(() => {
//     boxRef.current?.getNode().scrollTo({
//       top: boxRef.current.scrollHeight,
//       behavior: 'smooth',
//     });
//   }, [messages]);

  return (
    <View className="chat-box" ref={boxRef}>
      {messages.map((message, index) => (
        message.sender === 'user' ? (
          <View className="message sent" key={index}>
            {prepMessageSent(message.content)}
          </View>
        ) : (
          prepMessageRecieved(message.content) === null ? null :
            <View className="message recieved" key={index}>
              {prepMessageRecieved(message.content)}
            </View>
        )
      ))}
      {isAwaitingResponse ?
      <View className="message recieved">
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