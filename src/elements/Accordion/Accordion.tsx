import { useState, useEffect } from "react";
import { ContextAccordion } from "./ContextAccordion"
import { HeaderAccordion } from "./HeaderAccordion"
import { PropsAccordion} from "../../interface"

interface TimeProps {
  ms: number,
  s: number,
  m: number,
  h: number,
}

interface Props {
  exercise: PropsAccordion;
  activeElement:string;
  chengeActiveElement:(id: string) => void;
  getInfo:(id:string) => void;
  time: TimeProps;
}


export const Accordion= ({exercise, activeElement, chengeActiveElement, getInfo, time}: Props) => {
  
  const {title, task, id} = exercise

  // const [interv, setInterv] = useState<any>()

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
  //   // localStorage.setItem('stateTime', JSON.stringify(stateTime)) 
  //   // localStorage.setItem('time', JSON.stringify(time))
  // }, [ time, stateTime, interv])

  // console.log(localStorage)
  // localStorage.clear()

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
  //   console.log(localStorage)
  // } 

  // const stopTime = () => {
  //   clearInterval(interv)
  //   return setTime ({ms:0, s:0, m:0, h:0})
  // }

  //  const chengeActiveElement = (id:string) => {
  //   if (activeElement === '') {
  //     setStateTime(true)
  //     startTime()
  //     return setActiveElement(id)
  //   }
  //  }

  //  const getInfo = (id:string) => {
   
  //   if (id === activeElement) {
  //     stopTime()
  //     return  setActiveElement('')
  //   }
  //  }

  // window.addEventListener('load', () => {
  //   stateTime ? startTime() : stopTime();
  // });

  return (
    <div>
      <HeaderAccordion title={title} id={id} 
      chengeActiveElement={chengeActiveElement} 
      
      />
      <ContextAccordion task={task} id={id}  
      activeElement={activeElement}
      time={time}
      getInfo={getInfo}
      />
    </div>
  )
}

