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
import "../Assets/sass/Pages/PrivacyPage.scss";



//componet start here
const PrivacyPage = observer((props) => {
  const { rootStore } = useStores();
  const uiStore = rootStore.uiStore;
  let next_page = getUrlFromRoute(MAIN_ROUTES,'pre-interview');
  let style = {
    height : uiStore.windowDimensions.width > 992 ? "100%" : uiStore.windowDimensions.height,
  }
  return (
      <GenericPageContainer style={style} className='privacy-page'>
              <div className='page-background'>
                <img src={LandingBackground}></img>
              </div>
              <div className="inner-info">
                    {/* <div    className='logo'>
                        <img src={ LandingLetter}/>   
                    </div> */}
                    <div className='info'>
                    You do need to provide some information to continue using this tool and 
                    doing so, will help us better tailor your experience and the information you see, using the website. <br/>
                     Any information you do provide is and will remain anonymous. We do not ask for your name, contact information and we do not collect any other 
                     information or meta-data that can be used to identify who you are.<br/> 
                        Read more 
                    about how your privacy is protected here: Your Privacy.
                    </div>
              </div>
              <div className="start-buttton-container">
                <div className="inner">
                    <Link className='start-button' to={next_page}> 
                            Next
                            <svg id='StartButtonId' data-src={StartButton } data-css-scoping="disabled" />

                    </Link>
                </div>
            </div>
              
      </GenericPageContainer>
  )
})
//
export default  PrivacyPage;
