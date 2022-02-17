import React from "react";
import { observer } from 'mobx-react';
import CustomButton from "../ElementComponet/CustomButton";
import  "../../Assets/sass/Componet/QuestionNavView.scss";
import { useHistory } from 'react-router-dom';
import {useEffect } from 'react'

//Component
function QuestionNavView(props) {
    const store = props.store;
    const page = props.page;
    const nextCallBack = store.goNext;
    const prevCallback = store.goPrevious;
    //
    const withNavigation = props.withNavigation;
   
    return (

        <div className='navigational-wrapper'>
            {store.hasPrevious ? <CustomButton onClick={prevCallback} >Previous</CustomButton > : <div className='hidden'></div>}
            {store.hasNext && !page.getSetMoreQuestionCallBack() ? <CustomButton scrollTo={true} onClick={nextCallBack } to={store.getLink} >Next</CustomButton> : <div className='hidden'></div>}
        </div>
    );
  
}
export default observer(QuestionNavView);
