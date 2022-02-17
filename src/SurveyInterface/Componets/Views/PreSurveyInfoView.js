import React from "react";
import { observer } from 'mobx-react';
// import QuestionNavView from "./QuestionNavView";
import PreSurveyInfoNavView from "./PreSurveyInfoNavView";
import PreSurveyInfoViewInstance from "../ElementComponet/PreSurveyInfoViewInstance";
import "../../Assets/sass/Views/PreSurveyInfo.scss";

function PreSurveyInfo(props) {
    const store = props.store;
    const currentPage = store.getInfoRootPage;
    return (
        <div className="pre-survey-info">
            {currentPage ? 
            <div className="inner-survey-info-container">
                {currentPage && currentPage.info.length  ? <PreSurveyInfoViewInstance page={currentPage}/> :""}
                <PreSurveyInfoNavView/>
            </div> : ""}
        </div>
    );
  
}
export default observer(PreSurveyInfo);