import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"


interface PropsTitle {
  title: string,
  id: string,
  chengeActiveElement: (id: string) => void,
}

export const HeaderAccordion = ({title, id, chengeActiveElement}: PropsTitle) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <IoChevronDownOutline onClick={() => chengeActiveElement(id)}/>
        {/* <IoChevronUpOutline onClick={() => deActiveElement(id)}/> */}
      </div>
    </div>
  )
}

