import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/SideImage.scss"

//Component for side bar image that appear on certain pages
function SideImage(props) {
    const src = props.src;
    return (

        <div className='side-image-container'>
                <img src={src} />
        </div>
    );
  
}
export default  observer(SideImage);