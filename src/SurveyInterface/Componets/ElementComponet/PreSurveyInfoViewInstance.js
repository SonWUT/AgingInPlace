import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/Componet/PreSurveyInfoViewInstance.scss";
import infoIcon  from "../../Assets/image/svg/PatternLogo.svg";

//Component for the pre-survey information this componet shows inbetween each question when needed and right before
//beginning of a survey
function PreSurveyInfoViewInstance(props) {
    const page = props.page;
    return (
        <>
            <div className='page-info-icon'>
                <img src={infoIcon}></img>
            </div>
            <div className='page-info'>
                    <div className='header'>{page.label}</div>
                    <div className='info'>{page.info}</div>
            </div>
        </>
    );
  
}

export default observer(PreSurveyInfoViewInstance);
