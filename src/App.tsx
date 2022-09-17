import React, {useState} from 'react';
import a from './App.module.css';
import {Button} from "./button/Button";
import cat from './img/Без названия.jpg'

function App() {

    const [state, setState] = useState(false)

    const toggle = () => {
        setState(!state)
    }

    return (
        <div className={a.App}>
            <div className={a.wrapper}>
                <Button name={'Open modal window 😀'}
                    onClick={toggle}
                />
                {
                    state ? <div>
                        <img className={a.cat} src={cat}/>
                        <h2>❤ I love you ❤ </h2>
                    </div>: ''
                }
            </div>
        </div>
    );
}

export default App;

