import React, { useState } from 'react';

const Text = () => {
    const [text, setText] = useState('')

    const handleTextInput = (event) => {
        setText(event.target.value)
    }
    return(
        <div>
            <input type='text' onChange={handleTextInput} />
            <p>Uneli ste: {text}</p>
        </div>
    )
}

export default Text