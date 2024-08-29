import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { inputBoxStyles } from './InputBoxStyles';

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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={inputBoxStyles.inputBox}  automaticallyAdjustKeyboardInsets={true}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onBlur } }) => (
            <TextInput
              multiline={true}
              placeholder="Aa"
              onBlur={onBlur}
              onChangeText={text => handleChange(text)}
              value={inputValue}
              style={inputBoxStyles.inputBox.input}
            />
          )}
          name="userInput"
        />
        {errors.userInput && <Text>This is required.</Text>}
        <View style={inputBoxStyles.inputBox.button}>
        <Pressable onPress={handleSubmit}>
            <Text style={inputBoxStyles.inputBox.buttonText}>{"Send"}</Text>
        </Pressable>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
};

InputBox.propTypes = {
    userSendAction: PropTypes.func,
};

export default InputBox;