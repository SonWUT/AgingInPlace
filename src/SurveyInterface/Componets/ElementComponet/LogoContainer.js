import React from "react";
import "../../Assets/sass/Componet/Logo.scss";
import { Link } from "react-router-dom";

//Component for the logo 
function LogoContainer(props) {
    const src= props.src;
    const className = props.className;
    const to = props.to ?  props.to : "#" ;
    return (
         <Link  to={to}  className={className}>
            <div className='logo-container'>
                    <img src={src} />
            </div>
            </Link>
    );
  
}
export default  LogoContainer;
