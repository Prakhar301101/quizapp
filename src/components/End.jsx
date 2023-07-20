import React from 'react'
import { useGlobalContext } from "./context";

//will show correct percentage and will have a button to restart quiz

function End() {
    const{correct,questions,finishQuizreturn}=useGlobalContext();
  return (
    <div className="flex justify-center items-center h-[80vh]">
     <div className="Container flex flex-col items-center text-center font-sans  bg-slate-100 rounded-lg w-5/6 overflow-hidden shadow-lg max-w-2xl p-10 ">
        <h1 className='text-3xl font-bold '>Congrats !</h1>
        <p className='font-semibold text-lg'>You answered {correct} out of {questions.length} questions correctly</p>
        <button onClick={finishQuizreturn} className='bg-slate-600 w-4/6  mt-6 text-white rounded-md hover:bg-slate-500 '>Click to Play Again</button>
     </div>
    </div>
  )
}

export default End