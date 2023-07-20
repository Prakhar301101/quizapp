import React from 'react'
import { useGlobalContext } from "./context"
import Card from "./Card";
import Form from "./Form";
import End from './End';
import Loading from "./Loading";

function Content() {
    const { waiting, loading, questions, index, correct,isQuizFinish } = useGlobalContext();
    if(waiting){
        return <Form/>
    }
    if(loading){
        return <Loading/>
    }
    if(isQuizFinish){
       return <End/>
    }
    else return <Card/>
}

export default Content