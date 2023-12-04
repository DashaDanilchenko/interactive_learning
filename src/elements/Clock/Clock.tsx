import { useState, useEffect } from "react";


interface Props {
  time: {
      ms: number,
      s: number,
      m: number,
      h: number,
    },
}

const StopWatch = ({time}: Props) => {

  const {h, m, s, ms} = time

  // const [interv, setInterv] = useState<{} | any>({})

  // const [time, setTime] = useState<TimeProps>(() => {
  //   if (localStorage.getItem('time')) {
  //     return (JSON.parse(localStorage.getItem('time') || ''))
  //   } else {
  //     return {ms:0, s:0, m:0, h:0}
  //   }
  // })

  // const [stateTime, setStateTime] = useState(() => {
  //   if (localStorage.getItem('stateTime')) {
  //     return (JSON.parse(localStorage.getItem('stateTime') || ''))
  //   } else {
  //     return false
  //   }
  // })

  // useEffect (() => {
  //   localStorage.setItem('stateTime', JSON.stringify(stateTime)) 
  //   localStorage.setItem('time', JSON.stringify(time))
  // }, [time, stateTime])

  // let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

  // const run = () => {
  //   if (updatedM === 60) {
  //     updatedH++;
  //     updatedM = 0
  //   }
  //   if (updatedS === 60) {
  //     updatedM++;
  //     updatedS = 0
  //   }
  //   if (updatedMs === 100) {
  //     updatedS++;
  //     updatedMs = 0
  //   }
  //   updatedMs++
  //   return setTime ({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  // }

  // const startTime = () => {
  //   run();
  //   setInterv (setInterval(run, 1))
  // } 

  // const stopTime = () => {
  //   if (interv)
  //   {clearInterval(interv)}
  //  return setTime ({ms:0, s:0, m:0, h:0})
  // }

  // const start = () => {
  //   setStateTime(true)
  //   startTime()
  // }

  // const stop = () => {
  //   setStateTime(false)
  //   stopTime()
  // }

  // window.addEventListener('load', () => {
  //   stateTime ? startTime() : stopTime();
  // });

  // console.log(localStorage)

  // localStorage.clear()

  return (
    
     <div>
      <span>{h>=10? h : "0"+h}</span>
      <span>{m>=10? m : "0"+m}</span>
      <span>{s>=10? s : "0"+s}</span>
      <span>{ms>=10? ms : "0"+ms}</span>
     </div>
   
  );
}

export default StopWatch;