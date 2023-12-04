import { text } from "stream/consumers"
import { PropsTask } from "../../interface"
import { useState } from "react"
import StopWatch from "../Clock/Clock"
// import { TimeProps } from "../../interface"

// interface TimePropsAction {
//   ms: number,
//   s: number,
//   m: number,
//   h: number,
// }

interface Props {
  task: PropsTask,
  id: string,
  activeElement: string,
  time: {
      ms: number,
      s: number,
      m: number,
      h: number,
    },
    getInfo: (id: string) => void, 
}

interface Data {
  data: boolean,
  // id: string,
}



export const ContextAccordion = ({task, id,
   activeElement, time, getInfo
  }: Props) => {
  const {context, answers} = task

  return (
    <div
     className={id === activeElement ? "" : "none"}
     >
      <p>{context}</p>
     {answers.map((answer, index) => 
     <div key={index}>
      <p>{answer.text}</p>
      <div onClick={() => console.log(answer.correct)}>
      <input type="radio" name={id}/>
      </div>
     </div>
     )}
     <button onClick={() => getInfo(id)}>get</button>
     <StopWatch time={time}/>
    </div>
  )
}

