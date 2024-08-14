import {SendHorizontal} from 'lucide-react';
import React, {useState} from 'react';
import './InputBox.css'; // Import CSS file for styling
import PropTypes from 'prop-types';
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";


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
      <View>
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
            />
          )}
          name="userInput"
        />
        {errors.userInput && <Text>This is required.</Text>}
  
        <Button title="Submit" onPress={handleSubmit}>
            <SendHorizontal />
        </Button>
      </View>
    );
};

InputBox.propTypes = {
    userSendAction: PropTypes.func,
};

export default InputBox;