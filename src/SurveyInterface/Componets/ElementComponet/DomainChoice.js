import React from "react";
import { observer } from 'mobx-react';
import "external-svg-loader";
import "../../Assets/sass/Componet/DomainInstance.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

//Component for domain choice this is used for select the various domain a user might want to explore in the survey
function DomainInstance(props) {
    const index = props.index;
    const model = props.model;
    const domain_icon = require(`../../Assets/image/svg/Domains/${model.image_id}`).default;
    return (

        <div className='domain-instace-container' onClick={model.toggleSection} style={{borderColor:model.getIsSelected ? model.color : ""}}>
            <div className='selection-box'>
                {model.getIsSelected ?  <FontAwesomeIcon icon={faCheck} /> : ""}
            </div>
             <div className={`image-container ${model.getIsSelected ? "selected" : ""}`} style={
                 {
                     backgroundColor:model.getIsSelected ? model.color : "",
                     borderBottom : `1px solid ${model.getIsSelected ? model.color : "black"}`
                
                }
                 
                 }>
             <svg data-src={domain_icon} fill="currentColor" width="50px" height="50px"
                style={{color: "red"}}/>
            
             </div>
              <div className='info'>
                    <div className='header'>
                        {model.label}
                    </div>
                    <div className='description'>
                        {model.description }
                    </div>
              </div>
        </div>
    );
  
}
export default observer(DomainInstance);
