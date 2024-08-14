import {vfInteract, vfUpdateVariables} from './VoiceflowInteractions';
import React, {useState} from 'react';

const useConversationState = () => {
  const [messages, setMessages] = useState([]);
  const [choices, setChoices] = useState({});
  const [sessionSlug, setSessionSlug] = useState(() => {
    null;
  });
  const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);

  // Set the initial sessionSlug
  React.useEffect(() => {
    if (!sessionSlug) {
      setSessionSlug(Math.random().toString(36).substring(2, 15));
    }
  }, []);

  // Launch the voiceflow conversation when sessionSlug changes
  React.useEffect(() => {
    if (sessionSlug) {
      userSendAction(null, {type: 'launch'});
      console.log('Conversation started');
      console.log(sessionSlug);
    }
  }, [sessionSlug]); // This effect runs whenever sessionSlug changes

  const addMessage = (message) => {
    // process received messages, adding choices to state,
    if (message.sender === 'response') {
      if (message.content.type === 'choice') {
        for (const button of message.content.payload?.buttons) {
          addChoice({[button.request.type]: {...button, handler: pressButton}});
        }
      } else if (message.content.type === 'suggest_question_buttons') {
        // check if the payload is a string or json
        console.log(message.content.payload);
        let payload = message.content.payload;
        if (typeof message.content.payload === 'string') {
          payload = JSON.parse(message.content.payload);
        }
        for (const [key, value] of Object.entries(payload)) {
          addChoice({
            [key]: {name: value, handler: pressSuggestedQuestionButton},
          });
        }
      }
    }
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const addChoice = (choice) => {
    setChoices((prevChoices) => ({...prevChoices, ...choice}));
  };

  const pressButton = (button) => {
    userSendAction(button.name, button.request);
  };

  const pressSuggestedQuestionButton = (button) => {
    userSendAction(button.name, {type: 'text', payload: button.name});
  };

  // The choices a user can make from buttons or a choice step
  // Inside, they contain the button's name (.name), a handler (.handler)
  // and any other data that will be passed to the handler
  const userSendAction = (displayText, interactPayload) => {
    setIsAwaitingResponse(true);
    if (displayText !== null) {
      addMessage({sender: 'user', content: displayText});
    }
    const VFAnswers = vfInteract(sessionSlug, interactPayload);

    VFAnswers.then((res) => {
      for (let i = 0; i < res.length; i++) {
        addMessage({sender: 'response', content: res[i]});
      }
      setIsAwaitingResponse(false);
    }, (err) => {
      console.log(err);
    });

    // clear choices
    setChoices({});
  };

  const userUpdateVariables = (variables) => {
    return vfUpdateVariables(sessionSlug, variables);
  };

  return {
    messages,
    choices,
    userSendAction,
    userUpdateVariables,
    pressButton,
    isAwaitingResponse,
  };
};

export default useConversationState;