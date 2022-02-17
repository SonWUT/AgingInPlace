import React from "react";
import { observer } from 'mobx-react';
import QuestionInstance from "../ElementComponet/QuestionInstance";
import "../../Assets/sass/Views/QuestionsView.scss";

//Component
function QuestionsView(props) {
    const page = props.page;
    const moreQuestionCallBack = page ? page.getSetMoreQuestionCallBack() : null;
    console.log( moreQuestionCallBack);
    const questions = page ? page.getQuestions : null
    return (
        <div className='question-view'>
                {questions ? questions.map((question,index)=>{
                        let scroll_to = true;
                        return <QuestionInstance scrollTo={scroll_to} key={`question-id-${index+1}`} model={question} index={index} moreCallBack={moreQuestionCallBack} />
                    }) : "No Selected Page"
                }
                    
            </div>
    );

  
}
export default observer(QuestionsView);
