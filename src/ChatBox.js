import React from 'react';
import './ChatBox.css'; // Import CSS file for styling
import PropTypes from 'prop-types';
import {ButtonBox} from './Buttons';
import TypingIndicator from './TypingIndicator';

const prepMessageSent = (message) => {
  return (
    <div>
      {message.split('\n').map((line, i) => {
        return line ? <div className='messageLine' key={i}>{line}</div>: null;
      })}
    </div>
  );
};

const prepMessageRecieved = (trace) => {
  if (trace.type === 'text') {
    return (
      <div>
        {trace.payload.message.split('\n').map((line, i) => {
          return line ? <div className='messageLine' key={i}>{line}</div>: null;
        })}
      </div>
    );
  } else if (trace.type === 'visual') {
    if (trace.payload.visualType === 'image') {
      return (
        <img className="vf-image"
          src={trace.payload.image} alt="VF Image"
        />
      );
    } else {
      return (
        <div>
          {JSON.stringify(trace)}
        </div>
      );
    }
  } else if (trace.type === 'color_text') {
    return (
      <div className='messageLine' style={{color: trace.payload.color}}>
        {trace.payload.text}
      </div>
    );
  } else if (
    trace.type === 'choice' ||
    trace.type === 'path' ||
    trace.type === 'suggest_question_buttons'
  ) {
    return (null);
  } else {
    return (
      <div>
        {JSON.stringify(trace)}
      </div>
    );
  }
};

const ChatBox = ({messages, choices, isAwaitingResponse}) => {
  const boxRef = React.useRef(null);

  React.useEffect(() => {
    boxRef.current.scrollTo({
      top: boxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="chat-box" ref={boxRef}>
      {messages.map((message, index) => (
        message.sender === 'user' ? (
          <div className="message sent" key={index}>
            {prepMessageSent(message.content)}
          </div>
        ) : (
          prepMessageRecieved(message.content) === null ? null :
            <div className="message recieved" key={index}>
              {prepMessageRecieved(message.content)}
            </div>
        )
      ))}
      {isAwaitingResponse ?
      <div className="message recieved">
        <TypingIndicator />
      </div> : null}
      <ButtonBox choices={choices} />
    </div>
  );
};

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  choices: PropTypes.object,
  isAwaitingResponse: PropTypes.bool,
};

export default ChatBox;