import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/Componet/ShareButton.scss";

//Component for the share button shows
// on the resource page
function ShareButton(props) {
    const resources = props.resources;
    let resources_strings_array = resources.map((model,index)=>{
        return `${model.Category} \n ${model.label}
        \n${model.email}
       \n${model.website}
        \n${model.phone}\n
        ${model.description}`;
    });
    const resources_strings = resources_strings_array.join('\n\n\n');
    const string_anchor = `mailto:name@email.com?subject=Positive Aging&body=${resources_strings }`;

    return (

        <div className="share-button">
                <a href={string_anchor}>
                    Share Resources
                </a> 
              
        </div>
    );
  
}

export default observer(ShareButton);
