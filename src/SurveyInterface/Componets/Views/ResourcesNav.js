
import React from "react";
import { observer } from 'mobx-react';
import CustomButton from "../ElementComponet/CustomButton";
import  "../../Assets/sass/Views/ResourcesNav.scss";
import getUrlFromRoute from "../../Route/getUrlFromRoute";
import  MAIN_ROUTES from "../../Route/MAIN_ROUTES";
//Component
function ResourcesNav(props) {
    const store = props.store;
    const domain_survey_page = getUrlFromRoute(MAIN_ROUTES,'domain-page');
    return (
        <div className='resources-nav'>
            <div className='navigational-wrapper'>
                {store.hasMore ? <CustomButton onClick={store.incrementPagination} >
                            Read More  
                </CustomButton> : "" }
                <CustomButton to={domain_survey_page} >
                            Continue Survey   
                </CustomButton> 
            </div>
        </div>
    );
  
}
export default observer(ResourcesNav);
