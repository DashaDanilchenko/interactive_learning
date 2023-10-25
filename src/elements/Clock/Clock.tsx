import { useState } from "react";

interface TimeProps {
  ms: number,
  s: number,
  m: number,
  h: number,
}

const StopWatch = () => {

  const [time, setTime] = useState<TimeProps>({ms:0, s:0, m:0, h:0})
  const [interv, setInterv] = useState<{} | any>({})

  const start = () => {
    run();
    setInterv (setInterval(run, 10))
  }

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
  const stop = () => {
   clearInterval(interv)
    
  }

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