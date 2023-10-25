
import { ContextAccordion } from "./ContextAccordion"
import { HeaderAccordion } from "./HeaderAccordion"
import { PropsAccordion } from "../../interface"

interface Props {
  exercise: PropsAccordion;
  activeElement: string;
  setActiveElement(id: string): void;
  deActiveElement(id: string): void;
}

export const Accordion= ({exercise, setActiveElement, activeElement, deActiveElement}: Props) => {
  
  const {title, task, id} = exercise

  return (
    <div>
      <HeaderAccordion title={title} id={id} 
      setActiveElement={setActiveElement} 
      deActiveElement={deActiveElement}/>
      <ContextAccordion task={task} id={id}  
      activeElement={activeElement}/>
    </div>
  )
}

