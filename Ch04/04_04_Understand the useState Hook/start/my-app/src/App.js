import {useState} from 'react';
import './App.css';


function App() {
  const [emotion, setEmotions] = useState("happy");
  return (
    <div className="App">
        <h1>
         The current emotion is {emotion}
        </h1>
        <button onClick={ ()=>setEmotions("happy")}>Happy</button>
        <button onClick={ ()=>setEmotions("sad")}>Sad</button>
    </div>
  );
}

export default App;
