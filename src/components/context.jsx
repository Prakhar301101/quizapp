import { useState,useContext,createContext, useEffect } from "react";
import axios from "axios";

//context of states

const QuizContext = createContext();

const API_ENDPOINT = "https://opentdb.com/api.php?";
const tempurl =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

 const QuizProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz,setQuiz]=useState({
    amount:5,
    category:9,
    difficulty:"easy"
  });
  const [isQuizFinish, setIsQuizFinish] = useState(false);


  const fetchques= async(url)=>{
    setWaiting(false);
    setLoading(true);
    const res=await axios(url).catch((er)=>{
      console.log(er);
    })
    if(res){
      const data=res.data.results;
      if(data.length>0){
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      }
      else{
        setWaiting(true);
        setError(true)
      }
    }
    else{
      setWaiting(true);
    }
  }


  const handleNext=(e)=>{
    setIndex((oldIndex) => {
      const choosenAnswer=e.target.value;
      const correctans=questions[oldIndex].correct_answer;
      const index = oldIndex + 1
      if(choosenAnswer===correctans){
        setCorrect(correct+1);
      }
      if (index > questions.length - 1) {
        finishQuiztext()
        return 0
      } else {
        return index
      }
    })
  }

  const finishQuiztext=()=>{
    setIsQuizFinish(true);
  }

  const finishQuizreturn=()=>{
    setIsQuizFinish(false);
    setCorrect(0);
    setIndex(0);
    setWaiting(true);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value })
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    const{amount,category,difficulty}=quiz
    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`
    fetchques(url);
  }
  

  return (
    <QuizContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        quiz,
        handleChange,
        handleSubmit,
        handleNext,
        finishQuizreturn,
        isQuizFinish,
      }}
    >
    {children}
    </QuizContext.Provider>
  );
};
export const useGlobalContext = () => {
    return useContext(QuizContext);
  }
  
  export { QuizContext,QuizProvider }