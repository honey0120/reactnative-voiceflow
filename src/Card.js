import { View, Image, Text } from "react-native";
import { cardStyles } from "./CardStyles";
import { CardButton } from "./CardButton";

const cardButtons = (buttonsPayload) => {
    // check if there are buttons
    return buttonsPayload ? (<CardButton buttons={buttonsPayload}/>) : (null);
}

export const Card = ({payload}) => {
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
                {cardButtons(payload.buttons)}
            </View>
        </View>
    );

};