import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [dataFromChild, setDataFromChild] = useState('')

    const handleDataFromChild = (data) => {
        setDataFromChild(data)
    }

    return(
        <div>
            <h1>Data from child: {dataFromChild}</h1>
            <Child onData={handleDataFromChild} />
        </div>
    )
}

export default Parent