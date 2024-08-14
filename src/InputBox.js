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
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userInput: "",
    },
  })

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
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
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="User input"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="userInput"
        />
        {errors.userInput && <Text>This is required.</Text>}
  
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    );
};

export default InputBox;