import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../../Assets/sass/Componet/CustomButton.scss";
import {useEffect} from 'react';

////Component for individual various buttons across the site options
function CustomButton(props) {
    let onClick_handlier = props.onClick;
    let to=  props.to ? props.to : null;
    let exact=  props.exact ? props.exact : false;
    const scrollTo = props.scrollTo;
    const buttonRef = React.useRef(null);
    //register a event to actually dom object not the shadow dom object that
    useEffect(() => {
        if (scrollTo){
            buttonRef.current.scrollIntoView({behavior: "smooth"});
        }
        
    });
    return (

    to ? <Link  ref={buttonRef}
    to={to}
    exact={exact} className='custom-button' >
        {props.children}
    </Link > :  
        <button  ref={buttonRef}  className='custom-button' onClick={onClick_handlier} >
            {props.children}
        </button>
    );
  
}
export default   CustomButton;
