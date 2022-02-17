import React from "react";
import "../../Assets/sass/Componet/HeaderBanner.scss";
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Component for header across various pages in the app
function HeaderBanner(props) {
    const src= props.src;
    const className = props.className;
    const locationString = props.className ? props.className : "/";
    const imageMobile = props.mobileSrc;
    console.log(imageMobile);
    return (
        <Link  to={locationString}  className={`header-banner ${className}`}>
            <div className='inner-container'>
                    <img className="mobile" src={imageMobile }/>
                    <img src={src} />
            </div>
        </Link>
    );
  
}
export default  HeaderBanner;
