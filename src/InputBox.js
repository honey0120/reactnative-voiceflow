import {SendHorizontal} from 'lucide-react';
import React, {useState} from 'react';
import './InputBox.css'; // Import CSS file for styling
import PropTypes from 'prop-types';


const InputBox = ({userSendAction}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('');
    const userAction = {type: 'text', payload: inputValue};
    userSendAction(inputValue, userAction);
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a message..."
      />
      <button type="submit"><SendHorizontal /></button>
    </form>
  );
};

InputBox.propTypes = {
  userSendAction: PropTypes.func,
};

export default InputBox;