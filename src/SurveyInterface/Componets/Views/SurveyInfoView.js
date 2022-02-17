import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/Views/SurveyInfoView.scss";


//Component
function SurveyInfoView(props) {
    const page = props.page;
    return (
        <div className='survey-info-view'>
                <div className='inner-survey-info-view'>
                        {page.info}
                </div>
        </div>
    );

  
}
export default observer(SurveyInfoView);