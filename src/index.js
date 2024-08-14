import { View, Text } from "react-native";
import { React, useState } from "react";
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
                    fontWeight: 'bold',
                    alignItems: 'center',
                    justifyContent: 'center',
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