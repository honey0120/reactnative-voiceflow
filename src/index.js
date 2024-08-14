import { View, Text } from "react-native";
import { React, useState } from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import useConversationState from './useConversationState';
import ChatBox from './ChatBox';
import InputBox from './InputBox';

const Agent = () => {
    const {
        messages,
        choices,
        userSendAction,
        userUpdateVariables,
        isAwaitingResponse,
      } =
        useConversationState();

    const handleSend = async (newMessages = []) => {
            // Get the user's message
            const userMessage = newMessages[0];

            // Add the user's message to the messages state
            setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage)); 
            const messageText = userMessage.text.toLowerCase();

            // Agent message back
            // TO-DO: Add call to DM API (using axios)
            const agentMessage = {
                _id: new Date().getTime() + 1,
                text: "Helloooooo!",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Hotel Assistant',
                }
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, agentMessage));
            return;
    }

    return (
        <View style={{ flex:1 }}>
            <View style={{
                backgroundColor: '#f8f5eb',
                padding:10,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth:1,
                marginTop: 40,
                marginBottom: 5,
            }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold'
                }}>Voiceflow Agent on Mobile!</Text>
            </View>
            <ChatBox
              messages={messages}
              choices={choices}
              isAwaitingResponse={isAwaitingResponse}
            />
            <InputBox
              userSendAction={userSendAction}
            />
        </View>
    )
}

export default Agent;