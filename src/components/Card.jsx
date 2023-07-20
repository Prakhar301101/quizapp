import React from "react";
import { useGlobalContext } from "./context"

//will show Question one by one 

function Card() {
  const{questions,index,correct,isQuizFinish,handleNext}=useGlobalContext();
  const{question,correct_answer,incorrect_answers}=questions[index];
  const options=[];
  let correctind=Math.floor(Math.random()*4);
  let c=0;
  for(let i=0;i<4;i++){
    if(i==correctind){
      options.push(correct_answer);
    }
    else{
       options.push(incorrect_answers[c]);
       c=c+1;
    }
}

  return (
    <div className="flex  justify-center items-center h-[80vh]">
      <div className="Container bg-slate-100 rounded-lg w-5/6 overflow-hidden shadow-lg max-w-3xl">
        <div className="quiz-header flex flex-col items-center p-2 sm:p-10 ">
          <h1 className="text-2xl font-mono font-bold text-center p-4 m-0" dangerouslySetInnerHTML={{ __html: question }} />
          <div className="flex flex-col justify-center py-1 w-4/5">
            <button onClick={handleNext} value={options[0]} className="my-2 p-1 bg-gray-800 rounded-md text-white text-md hover:bg-gray-700" dangerouslySetInnerHTML={{__html:options[0]}} />
            <button onClick={handleNext} value={options[1]}  className="my-2 p-1 bg-gray-800 rounded-md text-white text-md hover:bg-gray-700" dangerouslySetInnerHTML={{__html:options[1]}}/>
            <button onClick={handleNext} value={options[2]}  className="my-2 p-1 bg-gray-800 rounded-md text-white text-md hover:bg-gray-700" dangerouslySetInnerHTML={{__html:options[2]}} />
            <button onClick={handleNext} value={options[3]}  className="my-2 p-1 bg-gray-800 rounded-md text-white text-md hover:bg-gray-700" dangerouslySetInnerHTML={{__html:options[3]}} />
            
            
          </div>
        </div>
        <button onClick={handleNext} id="submit" className="bg-slate-700 w-full p-2.5 cursor-pointer text-white hover:bg-slate-600">
         Next Question
        </button>
      </div>
    </div>
  );
}


export default Card;
