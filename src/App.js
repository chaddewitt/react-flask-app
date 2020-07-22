import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'

function App() {
    const [currentTime, setCurrentTime] = useState(0);

    function getTime() {
        fetch('/api/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }
    if (!currentTime) {
        getTime();
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => getTime()}
                    >
                        Update Time
                    </Button>
                </p>
                <p>The current time is {currentTime}.</p>
            </header>
        </div>
    );
}

export default App;
