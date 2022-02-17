import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/Componet/ResourceInstance.scss";

//Component for resource this represents the resource object(model) 
//as a react dom object 
function ResourceInstance(props) {
    const index = props.index;
    const model = props.model;
    const style_icon = {
        "background": model.getCategoryColor(),
        "backgroundColor": model.getCategoryColor()

    }
    //
    const style_font = {
        'color' :  model.getCategoryColor()

    }
    return (

        <div className='resource-instance'>
                <div className='category'>
                    <div style={style_icon} class="quarter-circle-bottom-right">   </div>
                    <div className='cat-label' style={style_font} >{model.Category}</div>
                </div>
                <div className='label'>
                    <span>{model.label}</span>
                </div>
                {model.email.length ?  <div><a target="_blank" className='email' href={`mailto:${model.email}`}> Email Contact</a></div> : ""}
                {model.website.length ? <div><a target="_blank" href={`${model.website}`} className='website'>Website</a></div> : ""}
                {model.phone.length ? <div><a target="_blank" href={`tele:${model.phone}`} className='phone'>Phone</a></div> : ""}
                {model.description.length ? <div className='description'>{model.description}</div> : ""}
        </div>
    );
  
}

export default observer(ResourceInstance);
