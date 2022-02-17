
import React from "react";
import { observer } from 'mobx-react';
import CustomButton from "../ElementComponet/CustomButton";
import  "../../Assets/sass/Componet/PreSurveyInfoNavView.scss";
import { useHistory } from "react-router-dom";
import getUrlFromRoute from "../../Route/getUrlFromRoute";
import  MAIN_ROUTES from "../../Route/MAIN_ROUTES";
//Component
function PreSurveyInfoNavView(props) {
    let history = useHistory();
    const domain_survey_page = getUrlFromRoute(MAIN_ROUTES,'domain-survey-page');
    return (
        <div className='navigational-wrapper'>
             <CustomButton onClick={history.goBack} >
                        Previous   
            </CustomButton>
            <CustomButton to={domain_survey_page} >
                        Let's Start    
            </CustomButton> 
        </div>
    );
  
}
export default observer(PreSurveyInfoNavView);
