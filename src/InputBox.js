import {SendHorizontal} from 'lucide-react';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 50,
        input: {
            flex: 1,
            padding: 10,
            border: 1,
            borderRadius: 5,
            marginRight: 10,
            fontSize: 'larger',
        },
        button: {
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#ff675c',
            color: '#ff675c',
            border: 'none',
            borderRadius: 5,
            cursor: 'pointer',
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
        <Button title="Submit" onPress={handleSubmit}>
            <SendHorizontal />
        </Button>
        </View>
      </View>
    );
};

InputBox.propTypes = {
    userSendAction: PropTypes.func,
};

export default InputBox;