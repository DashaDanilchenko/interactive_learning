interface PropsValue {
  text: string,
  correct: boolean,
}

export interface PropsTask {
  context: string,
  answers: PropsValue[],
}

export interface PropsAccordion {
    id: string,
    title: string,
    task: PropsTask,
  }