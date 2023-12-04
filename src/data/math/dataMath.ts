import { PropsAccordion } from "../../interface"

export const exercises: PropsAccordion[] = [
{
    id : '1',
    title: 'порівняйте',
    create: false,
    time: '',
    answerUser: false,
    task: {
        context:'2 > 6 ?',
        answers: [
            {
                text: 'not',
                correct: true,
            },
            {
                text: 'yes',
                correct: false,
            }
        ],
    },
},
{
    id : '2',
    title: 'порівняйте',
    create: false,
    time: '',
    answerUser: false,
    task: {
        context:'8 > 5 ?',
        answers: [
            {
                text: 'yes',
                correct: false,
            },
            {
                text: 'not',
                correct: true,
            }
        ],
    },
},
{
    id : '3',
    title: 'порівняйте',
    create: false,
    time: '',
    answerUser: false,
    task: {
        context:'7 < 9 ?',
        answers: [
            {
                text: 'not',
                correct: false,
            },
            {
                text: 'yes',
                correct: true,
            }
        ],
    },
},
]