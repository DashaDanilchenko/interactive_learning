import { useState, useEffect } from "react";

interface TimeProps {
  ms: number,
  s: number,
  m: number,
  h: number,
}

const StopWatch = () => {

  const [interv, setInterv] = useState<{} | any>({})

  const [time, setTime] = useState<TimeProps>(() => {
    return (JSON.parse(localStorage.getItem('time')|| "")) || {ms:0, s:0, m:0, h:0}
  })

  const [stateTime, setStateTime] = useState(() => {
    return (JSON.parse(localStorage.getItem('stateTime')|| "")) || (false)
  })

  useEffect (() => {
    localStorage.setItem('stateTime', JSON.stringify(stateTime)) 
    localStorage.setItem('time', JSON.stringify(time))
  }, [time, stateTime])

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0
    }
    updatedMs++
    return setTime ({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  const startTime = () => {
    run();
    setInterv (setInterval(run, 1))
  } 

  const stopTime = () => {
    if (interv)
    {clearInterval(interv)}
   return setTime ({ms:0, s:0, m:0, h:0})
  }

  const start = () => {
    setStateTime(true)
    startTime()
  }

  const stop = () => {
    setStateTime(false)
    stopTime()
  }

  window.addEventListener('load', () => {
    stateTime ? startTime() : stopTime();
  });

  console.log(localStorage)

  // localStorage.clear()

  return (
    <div >
     <div>
      <span>{time.h>=10? time.h : "0"+time.h}</span>
      <span>{time.m>=10? time.m : "0"+time.m}</span>
      <span>{time.s>=10? time.s : "0"+time.s}</span>
      <span>{time.ms>=10? time.ms : "0"+time.ms}</span>
     </div>
     <button onClick={start}>start</button>
     <button onClick={stop}>stop</button>
    </div>
  );
}

export default StopWatch;