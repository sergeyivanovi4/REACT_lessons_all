import React, { useState, useEffect, useRef } from 'react';

import logo from './logo.svg';
import ClockFace from './ClockFace.png';
import ClockFace_H from './ClockFace_H.png';
import ClockFace_M from './ClockFace_M.png';
import ClockFace_S from './ClockFace_S.png';




import './App.css';


const Input = () => {
  const [text, setText] = useState("test")
  useEffect(() => { //це - ефект
      const rnd = Math.random()
      // console.log('Ця функція перестворюється кожне оновлення Input, але викликається React тільки напочатку життєвого шляху', rnd)
      return () => { // це - очищення, яке замкнуло rnd
          console.log('Ця функція створюється та повертається на початку життєвого шляху компонента, але викликається при демонтуванні', rnd)
      }
  },[])
  // console.log('ОНОВЛЕННЯ', text)
  return <input type="text" 
                  value={text} 
                  onChange={e => setText(e.target.value)} />
}
                  
const Spoiler = ({children}) => {
  const divRef = useRef() //divRef - завжи один і той самий об'єкт.
  const [open, setOpen] = useState(false)
  console.log(divRef.current) //на початку тут `undefined`, а потім - `div`
  return (
      <div ref={divRef}> 
          <button onClick={() => setOpen(!open)}>Show/Hide</button>
          {open && children}
      </div>
  )
}



const Timer = ({s}) => { //отримуємо час оновлення
  const [count, setCount] = useState(s)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef()
  
  useEffect(() => {
      intervalRef.current = setInterval(() => {
      if (count > 0 && !paused) {
        setCount(count => count - 1);
    }
      }, 1000); //передаємо цей час в setInterval
      // console.log('Іниціюємо таймер', ms, intervalRef.current)
      return () => {
          // console.log('Очищення', ms, intervalRef.current)
          clearInterval(intervalRef.current)
      }
  }, [s, count === 0, paused]) //якщо цього не додати, то час оновлення буде впливати на роботу компонента тільки спочатку його життєевого шляху
  
  // console.log('оновлення', count)
  
  useEffect(() => {
      if (paused || count === 0){
          clearInterval(intervalRef.current)
          intervalRef.current = null
      }
      else {
          intervalRef.current = intervalRef.current || setInterval(() => setCount(count => count -1), 1000) //передаємо цей час в setInterval
      }
  }, [paused, count])

  const formatTime = () => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    // або можна викорастати const hours = Math.floor(count / 3600).toString().padStart(2, 0)
  };
  
  return (
      <div>
        <div>{formatTime()}</div>
        <button onClick={() => setPaused(!paused)}>{paused ? "Resume" : "Pause"}</button>
      </div>
  )
}



function TimerControl() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const [fullTime, setFullTime] = useState(0)

  console.log(fullTime)

  const handleStart = () => {
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    if (totalSeconds >= 0) {
      setFullTime(totalSeconds);
    }
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setFullTime(0);
  };
  
  return (
    <div>
      <input type="number" placeholder='години' value={hours} onChange={e => setHours(parseInt(e.target.value))}/>
      <input type="number" placeholder='хвилини' value={minutes} onChange={e => setMinutes(parseInt(e.target.value))}/>
      <input type="number" placeholder='секунди' value={seconds} onChange={e => setSeconds(parseInt(e.target.value))}/><br />
      <button onClick={handleStart}>START</button>
      <button onClick={handleReset}>RESET</button>

      {fullTime > 0 && <Timer s={fullTime}/>}
    </div>
  )
  
}



const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>

const TimerContainer = ({ seconds, refresh, render: RenderComponent }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - refresh / 1000);
    }, refresh);

    return () => clearInterval(interval);
  }, [seconds, refresh]);

  // return <RenderComponent seconds={Math.ceil(time)} />; 
  return <RenderComponent seconds={Number(time.toFixed(0))} />; // НЕ ЗНАЮ ЯК ПОБОРОТИ - ЯКЩО НЕ ОКРУГЛЯТИ - ТО TimerContainer, SecondsTimer БАГАТО ЦИФР, А ЯКЩО ОКРУГЛЯТИ - ТО refresh ПОТІМ НЕ ФАЙНО ПРАЦЮЄ НА Watch

};




function LCD ({ seconds }) {
  const formatTime = (count) => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    // або можна викорастати const hours = Math.floor(count / 3600).toString().padStart(2, 0)
  };

  return (
    <>
      <div>
        {formatTime(seconds)}
      </div>
    </>
  )
}



const Watch = ({ seconds }) => {
  const formatTime = (count) => {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    return { hours, minutes, seconds }
  };

  return (
    <div className='clock'> 
      <img className='watch' src={ClockFace} />
      <img style={{ transform: `rotate(${formatTime(seconds).hours * 15}deg)` }} className="watch_hours" src={ClockFace_H} />
      <img style={{ transform: `rotate(${formatTime(seconds).minutes * 6}deg)` }} className="watch_minutes" src={ClockFace_M} />
      <img style={{ transform: `rotate(${formatTime(seconds).seconds * 6}deg)` }} className="watch_seconds" src={ClockFace_S} />
    </div>
  )
}

function App() {
// const [ms, setMs] = useState(1000)
// const [timers, setTimers] = useState([])
  return (
    <div className="App">
      <header className="App-header">
      {/* <Spoiler>
            <Input />
      </Spoiler> */}

      {/* <button onClick={() => setMs(ms => ms +100)}>+100 ms</button>
      <button onClick={() => setMs(ms => ms -100)}>-100 ms</button>
      {timers.map(rnd => <Timer ms={ms} key={rnd}/>)}
      <button onClick={() => setTimers([Math.random(), ...timers])}>+таймер</button> */}
      <hr style={{width: "90%"}}/>
      <h2 style={{color :"red"}}>Timer:</h2>
      <Timer s={100} />

      <hr style={{width: "90%"}}/>
      <h2 style={{color :"red"}}>TimerControl:</h2>
      <TimerControl />

      <hr style={{width: "90%"}}/>
      <h2 style={{color :"red"}}>TimerContainer:</h2>
      <TimerContainer seconds={1800} refresh={100} render={SecondsTimer}/>

      <hr style={{width: "90%"}}/>
      <h2 style={{color :"red"}}>LSD:</h2>
      <TimerContainer seconds={1800} refresh={100} render={LCD}/>

      <hr style={{width: "90%"}}/>
      <h2 style={{color :"red"}}>Watch:</h2>
      <TimerContainer seconds={1800} refresh={100} render={Watch}/>
      </header>
    </div>
  );
}

export default App;
