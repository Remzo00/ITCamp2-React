import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [username, setUsername] = useState('');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };


    return(
        <div>
            <h1>Username: {username}</h1>
            <Child onUsernameChange={handleUsernameChange} />
        </div>
    )
}

export default Parent