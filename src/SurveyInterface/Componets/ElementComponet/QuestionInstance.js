import React from "react";
import { observer } from 'mobx-react';
import ChoiceInstance from "../ElementComponet/ChoiceInstance";
import "../../Assets/sass/Componet/QuestionInstance.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {useEffect} from 'react';


//Component for individual question object take a question object
//and convert into react dom object
function QuestionInstance(props) {
    const index = props.index;
    const model = props.model;
    const choices = model.choices;
    const moreCallBack = props.moreCallBack;
    const ratio_percentage = choices.length > 8 ? 50 : 100;
    const style = {width: `calc(${ratio_percentage}% - 8px)`}
    const scrollTo = props.scrollTo;
    const questionRef = React.useRef(null);
    //get the reference to the actually dom object not the shadow dom object not the shadow dom object
    //usually used when register real event on the current object in dom 
    //this tell the browswer to scrolll to the actually object in dom
    useEffect(() => {
        if (scrollTo ){
            questionRef.current.scrollIntoView({behavior: "smooth"});
        }
        
    });

    return (

        <div ref={questionRef} className='question-instace-container'>
              <div className='index'>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
              </div>
              <div className='main-question-contanier' >
                        <div className='question-label-container'>
                              {model.label}  
                        </div>
                        <div className='choices-container' onClick={moreCallBack}>
                            {choices.map((model,index)=>{
                                return <ChoiceInstance style={style} key={`choice-id-${index}`} model={model} index={index} />
                            })}
                        </div>
              </div>
              {moreCallBack || !model.require_answer ? 
                    <div className="skip-button" onClick={moreCallBack}>
                    Skip
                </div> : "" 
              }
              
        </div>
    );
  
}
export default observer(QuestionInstance);
