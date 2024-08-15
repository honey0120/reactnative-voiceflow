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
        <View style={{ flex:1, marginBottom: 35 }}>
            <View style={{
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth:2,
                borderColor: '#cccccc',
                marginTop: 40,
                marginBottom: 5,
            }}>
                <Text style={{
                    fontSize: 28,
                    color: '#FFAC2F',
                    paddingTop: 20,
                    paddingBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>Hotel Booking Agent</Text>
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