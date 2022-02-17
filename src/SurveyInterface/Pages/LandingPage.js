import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import { useStores } from '../hooks/use-stores'
import  MAIN_ROUTES from "../Route/MAIN_ROUTES";
import getUrlFromRoute from "../Route/getUrlFromRoute";
import { Link } from "react-router-dom";
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import  StartButton from '../Assets/image/svg/StartButten.svg' ;
import LandingBackground from "../Assets/image/svg/LandingBackground-1.svg";
import LandingLetter from "../Assets/image/svg/LandingLetter.svg";
import "../Assets/sass/Pages/Landing.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"






//componet start here
const LandingPage = observer((props) => {
  const { rootStore } = useStores();
  const uiStore = rootStore.uiStore;
  let next_page = getUrlFromRoute(MAIN_ROUTES,'privacy-page');
  let style = {
    height : uiStore.windowDimensions.width > 992 ? "100%" : uiStore.windowDimensions.height,
  }
  
  return (
      <GenericPageContainer style={style} className='landing-page'>
              <div className='page-background'>
                <img src={LandingBackground}></img>
              </div>
              <div className="inner-info">
                    <div    className='logo'>
                        <img src={ LandingLetter}/>   
                      </div>
                    <div className='info'>
                    Get connected to services, supports, and programs that can help you 
                    and your loved ones age well, safely and comfortably with as 
                    much independence as you want.
                    </div>
              </div>
              <div className="start-buttton-container">
                <div className="inner">
                    <Link className='start-button' to={next_page}> 
                            Start
                            <svg id='StartButtonId' data-src={StartButton } data-css-scoping="disabled" />

                    </Link>
                </div>
            </div>
              
      </GenericPageContainer>
  )
})
//
export default  LandingPage;
