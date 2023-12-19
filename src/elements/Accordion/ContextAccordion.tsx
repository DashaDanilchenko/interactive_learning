import { text } from "stream/consumers"
import { PropsAccordion, PropsTask, PropsValue } from "../../interface"
import { useState } from "react"
import StopWatch from "../Clock/Clock"
import { useAppDispatch } from "../../hooks"
import { stateAnswer } from "../../story/sliceMath"
// import { TimeProps } from "../../interface"

// interface TimePropsAction {
//   ms: number,
//   s: number,
//   m: number,
//   h: number,
// }

console.log(localStorage)



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
    // changeStateAnswer: (answers: PropsValue[], id:string, id_from_answer:string, done:boolean) => void,
    // dataExercises: PropsAccordion[],
    // setDataExercises: () => void, 
}

interface Data {
  data: boolean,
  // id: string,
}



export const ContextAccordion = ({task, id,
   activeElement, time, getInfo,
  //  changeStateAnswer,
  }: Props) => {
  const {context, answers} = task

  const dispatch = useAppDispatch()

  const changeStateAnswer = (id:string, id_from_answer:string, done:boolean, correct: boolean) =>{
    dispatch(stateAnswer({id, id_from_answer, done, correct}))
  }

  

  return (
    <div
     className={id === activeElement ? "" : "none"}
     >
      <p>{context}</p>
     {answers.map(( answer, index) => 
     <div key={index}>
      <p>{answer.text}</p>
      <div >
      <input type="radio" checked={answer.done} onChange={() => changeStateAnswer(id, answer.answer_id, answer.done, answer.correct)}/>
      </div>
     </div>
     )}
     <button onClick={() => getInfo(id)}>get</button>
     
     <StopWatch time={time}/>
    </div>
  )
}

