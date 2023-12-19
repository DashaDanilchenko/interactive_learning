
import { ContextAccordion } from "./ContextAccordion"
import { HeaderAccordion } from "./HeaderAccordion"
import { PropsAccordion, PropsValue} from "../../interface"

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
  // changeStateAnswer: (answers: PropsValue[], id:string, id_from_answer:string, done:boolean) => void
  // dataExercises : PropsAccordion[];
  // setDataExercises:() => void;
}


export const Accordion= ({exercise, 
  activeElement, 
  chengeActiveElement, 
  getInfo, 
  time,
  // changeStateAnswer,
  // dataExercises,
  // setDataExercises,
}: Props) => {
  
  const {title, task, id} = exercise

  return (
    <div>
      <HeaderAccordion title={title} id={id} 
      chengeActiveElement={chengeActiveElement} 
      
      />
      <ContextAccordion task={task} id={id}  
      activeElement={activeElement}
      time={time}
      getInfo={getInfo}
      // changeStateAnswer = {changeStateAnswer}
  //     dataExercises = {dataExercises}
  // setDataExercises = {setDataExercises}
      />
    </div>
  )
}

