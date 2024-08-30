import { View, Image, Text } from "react-native";
import { imageStyles } from "./ImageStyles";
import { cardStyles } from "./CardStyles";

export const Card = ({trace}) => {

    return (
        <View style={cardStyles.container}>
            <Image style={cardStyles.image}
                source={{
                uri: `${trace.payload.imageUrl}`,
                }} alt="Image trace"
            />
            <View style={cardStyles.textBox}>
                <Text style={cardStyles.textBox.text}>{trace.payload.description.text}</Text>
            </View>
        </View>
    );

};