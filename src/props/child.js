import React from "react";

const Child = ({onData}) => {
    const sendDataToParent = () => {
        const data = 'Hello from child'
        onData(data)
    }
    return(
        <div>
            <button onClick={sendDataToParent}>Send data to parent</button>
        </div>
    )
}

export default Child