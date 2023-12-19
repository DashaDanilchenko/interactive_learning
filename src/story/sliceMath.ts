import { createSlice } from "@reduxjs/toolkit";
import { exercises } from "../data/math/dataMath";
import { RootState } from ".";
import { PropsValue } from "../interface";

const exercisesSlice = createSlice({
    name: 'exercises',
    initialState: {
        exercises: exercises,

    },

  //   answers: exercis.task.answers.map((answer:PropsValue) => {
  //     return answer.answer_id === action.payload.id_from_answer
  //         ? {...answer, text: 'y'}  
  //         : {...answer, text: 'n'}  
  // }) 

    
    
    reducers: {

        stateAnswer: (state, action) => { 
           
            state.exercises
             = state.exercises.map(exercis => {
                if (exercis.id !== action.payload.id) {
                  return exercis;
                }
                return { ...exercis, task: {
                  ...exercis.task , answers: exercis.task.answers.map(answer => {
                    return answer.answer_id === action.payload.id_from_answer
                      ? {...answer, done: !action.payload.done, correct: action.payload.correct}  
                      : {...answer, done: false} 
                  })
                }
            }
                
              })
          
        },

        stateTimeAnswer(state, action) {
            // console.log(action.payload)
            state.exercises = state.exercises.map(exercis => {
                          if (exercis.id !== action.payload.id) {
                            return exercis;
                          }
                          return { ...exercis, 
                            time: 
                            `${action.payload.time.h} : 
                            ${action.payload.time.m} : 
                            ${action.payload.time.s} : 
                            ${action.payload.time.ms}
                            `}
                        })
        },
        
    }
})




export const {stateAnswer, stateTimeAnswer} = exercisesSlice.actions
// Other code such as selectors can use the imported `RootState` type
// export const selectExercises = (state: RootState) => state.exercises

export default exercisesSlice.reducer