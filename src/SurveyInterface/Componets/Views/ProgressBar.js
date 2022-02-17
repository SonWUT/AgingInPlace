import React /*,{Component}*/ from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar,Step } from "react-step-progress-bar";
import { observer } from 'mobx-react';
import "../../Assets/sass/ProgressBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const StepProgressBar =(props)=> {
    //
    let progressModal = props.store.progressBarModel;
    let percentage = Math.round(progressModal.getPercentageDomain);
    //
    let completedDomains = progressModal.getCompletedDomains;
    //console.log(completedDomains);
    //
    let inCompleteDomains =  progressModal.getInProgressDomains;
    //console.log( inCompleteDomains.length);
    inCompleteDomains = inCompleteDomains.length ? inCompleteDomains:  progressModal.getViewableDomains;

   
    let InCompletestepPostion =inCompleteDomains.map(index=>{
          return (index  / inCompleteDomains.length) *100;
        })
        let style_incomplete = {
          width: `calc(1.38888888889rem * ${inCompleteDomains.length})`,
          maxWidth: `calc(1.38888888889rem * ${inCompleteDomains.length})`,

      };
      //inprogress
      let InProgresstepPostion = [...Array(1).keys()];
      InProgresstepPostion = InProgresstepPostion.map(index=>{
          return (index / InProgresstepPostion.length) *100;
      });
      //
      let style_complete = {
        width: `calc(1.98888888889rem * ${completedDomains.length })`,
        maxWidth: `calc(1.98888888889rem * ${completedDomains.length})`,

    };
    ///
    return  (
      <div className="progress-bar-container">
        <div className ='page-label'>
            {progressModal.getCurrentPageLabel}    
        </div>
        <div className='progress-bars-total-container'>
          <div  style={style_complete} className={'completed-progress'}>
              <ProgressBar  stepPositions={ completedDomains.map((item,index)=>{
                return ((index / completedDomains.length) *100 )
              })} 
                percent={100}
                filledBackground="#62CBD5"
              >
                {completedDomains.map((item,key)=>{
                  return (<Step transition="scale" key={`step-id-${key}`} >
                  {({ accomplished }) => (
                    <div className='step-containers'>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                  )}
                </Step>);
                })}
              </ProgressBar>
          </div>
          <div   className={'in-progress-progress'}>
              <ProgressBar  
                percent={percentage}
                filledBackground="#F9AC56"
              >
                {InProgresstepPostion.map((item,key)=>{
                  return (<Step transition="scale" key={`step-id-${key}`} >
                  {({ accomplished }) => (
                    <div className='step-containers in-progress'></div>
                  )}
                </Step>);
                })}
              </ProgressBar>
          </div>
          {inCompleteDomains.length > 0 ? <div  style={style_incomplete} className={'incomplete-progress'}>
              <ProgressBar  stepPositions={inCompleteDomains.length < 2 ?  [100] : []}
                percent={0}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
              >
                {inCompleteDomains.map((item,key)=>{
                  return (<Step transition="scale" key={`step-id-${key}`} >
                  {({ accomplished }) => (
                    <div className='step-containers'></div>
                  )}
                </Step>);
                })}
              </ProgressBar>
          </div>

          
          : "" }
          
        </div>
        <div className ='percentage-bar-count'>
            {`${percentage}% completed`}    
        </div>
      </div>
    );
}

export default observer(StepProgressBar);