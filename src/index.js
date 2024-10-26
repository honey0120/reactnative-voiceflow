import { View, Text } from "react-native";
import { React, useState } from "react";
import useConversationState from './useConversationState';
import ChatBox from './ChatBox';
import InputBox from './InputBox';
import { colours } from "./theme";

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
                backgroundColor: colours.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth:2,
                borderColor: colours.accent,
                marginTop: 40,
                marginBottom: 5,
            }}>
                <Text style={{
                    fontSize: 28,
                    color: colours.primary,
                    paddingTop: 20,
                    paddingBottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>Hotel Agent</Text>
            </View>
            <ChatBox
              messages={messages}
              choices={choices}
              isAwaitingResponse={isAwaitingResponse}
              userSendAction={userSendAction}
            />
            <InputBox
              userSendAction={userSendAction}
            />
        </View>
    )
}

export default Agent;