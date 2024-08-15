import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 50,
        marginHorizontal: 10,
        
        input: {
            flex: 1,
            padding: 8,
            borderWidth: 2,
            borderRadius: 15,
            fontSize: 18,
            borderColor: '#cccccc',
        },
        button: {
            paddingLeft: 15,
            paddingRight: 15,
            padding: 10,
            backgroundColor: '#FFAC2F',
            color: '#FFAC2F',
            border: 'none',
            borderRadius: 15,
            cursor: 'pointer',
        },
        buttonText: {
            fontSize: 18,
            color: 'white',
        }
    }
});


const InputBox = ({userSendAction}) => {
    const [inputValue, setInputValue] = useState('');

    const {
            control,
            formState: { errors },
        } = useForm({
            defaultValues: {
            userInput: "",
            },
        })

    const handleChange = (text) => {
        setInputValue(text);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue('');
        const userAction = {type: 'text', payload: inputValue};
        userSendAction(inputValue, userAction);
    };

    return (
      <View style={styles.inputBox}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onBlur } }) => (
            <TextInput
              placeholder="User input"
              onBlur={onBlur}
              onChangeText={text => handleChange(text)}
              value={inputValue}
              style={styles.inputBox.input}
            />
          )}
          name="userInput"
        />
        {errors.userInput && <Text>This is required.</Text>}
        <View style={styles.inputBox.button}>
        <Pressable onPress={handleSubmit}>
            <Text style={styles.inputBox.buttonText}>{"Send"}</Text>
        </Pressable>
        </View>
      </View>
    );
};

InputBox.propTypes = {
    userSendAction: PropTypes.func,
};

export default InputBox;