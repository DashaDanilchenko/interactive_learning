import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"


interface PropsTitle {
  title: string,
  id: string,
  setActiveElement(id: string): void,
  deActiveElement(id: string): void,
}

export const HeaderAccordion = ({title, id, deActiveElement, setActiveElement}: PropsTitle) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <IoChevronDownOutline onClick={() => setActiveElement(id)}/>
        <IoChevronUpOutline onClick={() => deActiveElement(id)}/>
      </div>
    </div>
  )
}

