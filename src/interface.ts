export interface PropsValue {
  answer_id: string,
  text: string,
  correct: boolean,
  done: boolean,
}

export interface PropsTask {
  context: string,
  answers: PropsValue[],
}

export interface PropsAccordion {
    id: string,
    title: string,
    time: string,
    answerUser: boolean,
    task: PropsTask,
  }

  