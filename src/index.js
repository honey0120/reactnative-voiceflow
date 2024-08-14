import { View, Text } from "react-native";
import { React, useState } from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import { Axios } from "axios";

const Agent = () => {
    const [messages, setMessages] = useState([])

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
            <GiftedChat 
                messages={messages}
                onSend={messages => handleSend(messages)}
                user={{ _id:1}}
            />
        </View>
    )
}

export default Agent;