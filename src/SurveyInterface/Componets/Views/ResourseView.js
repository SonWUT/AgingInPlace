import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/Views/ResourceView.scss";
import ResourceInstance  from "../ElementComponet/ResourceInstance";
import ResourcesNav from "./ResourcesNav";
import ShareButton from "../ElementComponet/ShareButton";
//Component
function ResourceView(props) {
    const store = props.store;
    const resources = store.getMatchingResourcesPagination;
    return (
        <>
        <ShareButton resources={resources}/>
        <div className=' resource-view'>
            <div className='inner-resources'>
                {resources.map((resource,index)=>{
                    return <ResourceInstance  model={resource} index={index}/>
                })}
            </div>
            <ResourcesNav store={store}/>
                   
        </div>
        </>
    );

  
}
export default observer(ResourceView);
