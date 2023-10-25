import { useState } from "react";
import { Accordion } from "../../elements/Accordion/Accordion"
import {exercises} from "../../data/math/dataMath"
import {PropsAccordion} from "../../interface"
import StopWatch from "../../elements/Clock/Clock";


const Math = () => {

  const [activeElement, setActiveElement] = useState<string>('')
  function deActiveElement (id:string) {
    if (id === activeElement) {
      setActiveElement("")
    }
  }

  return (
    <div>
   {exercises.map((exercise:PropsAccordion, index:number) => <Accordion key={index} 
   exercise={exercise} 
   activeElement={activeElement} 
   setActiveElement={setActiveElement}
   deActiveElement={deActiveElement}/>)}
   <StopWatch/>
    </div>
  )
}

export default Math