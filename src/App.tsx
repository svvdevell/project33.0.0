import React from 'react';
import {useState} from "react"
import Title from "./components/Title"

function App() {
    const [isOpened, setOpened] = useState<boolean>(false)
    const handleClick = () => setOpened(prevValue => !prevValue)
    return (
        <>
            <div className="title">
                {isOpened && <Title name="Hello World" type="normal"/>}
                <button onClick={handleClick}>{isOpened ? "Close" : "Open"}</button>
            </div>
        </>
    );
}

export default App;