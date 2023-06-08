import React, {useState} from "react";

const Child = ({onUsernameChange}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      onUsernameChange(inputValue);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleButtonClick}>Update Username</button>
      </div>
    );
}

export default Child