import { View, Image, Text } from "react-native";
import { cardStyles } from "./CardStyles";

export const Card = ({payload}) => {
    // To-do: Add buttons and action handling
    return (
        <View style={cardStyles.container}>
            <Image style={cardStyles.image}
                source={{
                uri: `${payload.imageUrl}`,
                }} alt="Image trace"
            />
            <View style={cardStyles.textBox}>
                <Text style={cardStyles.textBox.titleText}>{payload.title}</Text>
                <Text style={cardStyles.textBox.descriptionText}>{payload.description.text}</Text>
            </View>
        </View>
    );

};