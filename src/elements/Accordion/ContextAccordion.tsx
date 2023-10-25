import { text } from "stream/consumers"
import { PropsTask } from "../../interface"
import { useState } from "react"


interface Props {
  task: PropsTask,
  id: string,
  activeElement: string,
}

interface Data {
  data: boolean,
  // id: string,
}



export const ContextAccordion = ({task, id, activeElement}: Props) => {
  const {context, answers} = task

  return (
    <div className={id === activeElement ? "" : "none"}>
      <p>{context}</p>
     {answers.map((answer, index) => 
     <div key={index}>
      <p>{answer.text}</p>
      <div onClick={() => console.log(answer.correct)}>
      <input type="radio" name={id}/>
      </div>
     </div>
     )}
    </div>
  )
}

