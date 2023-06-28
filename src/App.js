import { useEffect, useRef, useState } from 'react';
import './App.css';
import song from './music.mp3';

function App() {

//useRef Hook -  works with DOM elements and not virtual DOM.
// WE can use it when we want to make changes in the component, 
//but don't want to render every element again and again
//some developers don't like it, it contradicts the principle of react working with virtual DOM,
//so virtual DOM will not have the latest update and will not see the changes introduced with useRef

//First Example
const [place, setPlace] = useState ('')

//we will use useRef to highlight the input field
const inputRef = useRef(null)// this is our initial state, could leave the brackets empty

//adding focus function to button onClick
const focus = ()=>{
  inputRef.current.focus()// useRef returns an object with 'current' characteristics. Always.
}

//Second example. We will see the previous state using useRef:

const [count, setCount] = useState(0);// initial count is 0
const previousCountRef = useRef(null);

const previousCount = previousCountRef.current;

//we need to add useEffect to get access to the previous state

useEffect(()=>{
  previousCountRef.current = count;// count is valid for both lines as the state is changing to +1
                                   // useEffect is allowing us to get info about the state before the click (previous state)
})


//Third Example - Music Player. 

const [musicPlay, setMusicPlay] = useState(true);//initially the music is not playing, the button says play
                                                 //with click the state will change
//Introducing a function to button onClick, changing state within this function

const handlePlay = ()=>{
  setMusicPlay(!musicPlay)// toggling to change the state back and forth
  musicPlay ? refAudio.current.play() : refAudio.current.pause()// here we attached music to the button and toggle it depending on current state.
}

//Initiating useRef

const refAudio = useRef();// +add ref to <audio></audio>

  return (
    <div className="App">
      <div>
      <br></br>
<input ref={inputRef} value = {place} onChange={e=> setPlace(e.target.value)}/>
<p>I want to go to the {place} !!!</p>
<button onClick={focus}>Click to see useREF </button>
</div>

<br></br>
<div>
<p>Current state: {count}</p>
<p>Previous state: {previousCount}</p>
<button onClick={()=>setCount(count+1)}>Click to see useRef</button>
</div>

<br></br>
<br></br>
<br></br>
<div>
  <audio ref={refAudio} src={song} loop='loop'></audio>
<button onClick={handlePlay}>{musicPlay ? 'PLAY' : 'PAUSE' } </button>
</div>

    </div>



  );
}

export default App;
