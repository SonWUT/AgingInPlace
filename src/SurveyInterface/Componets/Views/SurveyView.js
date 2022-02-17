import React from "react";
import { observer } from 'mobx-react';
import QuestionNavView from "./QuestionNavView";
import QuestionsView from "./QuestionsView";
import SurveyInfoView from "./SurveyInfoView";
import "../../Assets/sass/Views/SurveyView.scss";
function SurveyView(props) {
    const store = props.store;
    const currentPage = store.getCurrentPage;
    const withNavigation = props.withNavigation;
    return (
        <div className="inner-survey-container">
            {currentPage && currentPage.info.length  ? <SurveyInfoView page={currentPage}/> :
             <QuestionsView page={currentPage}/>}
            <QuestionNavView withNavigation={withNavigation} store={store} page={currentPage}/>
        </div>
    );
  
}
export default observer(SurveyView);