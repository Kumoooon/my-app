import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle";
import Button from "./Button";

function App() {
    const [alert, setAlert] = useState(true);
    const onclick = () => {
        setAlert(!alert)
    }
    return (
        <div className="App">
            <button onClick={onclick}></button><Button item="push me" />
            {alert === true ? <Circle/> : null}</div>
    );
}

export default App;
