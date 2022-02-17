import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import { useStores } from '../hooks/use-stores';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import SurveyView from "../Componets/Views/SurveyView";
import ProgressBar from "../Componets/Views/ProgressBar";
import PreInterViewLayout from "../Componets/Layout/PreInterviewLayout";
import LogoContainer from "../Componets/ElementComponet/LogoContainer";
import SideBarImageWidget from "../Componets/ElementComponet/SideImage";
import SideBarImage from "../Assets/image/svg/LeftSideBarImage.svg";
import Menu from "../Componets/Views/Menu";
import Logo from "../Assets/image/svg/Logo.svg";
import SurveyDomainLayout from "../Componets/Layout/SurveyDomainLayout"


const PreInterviewPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const pageStore = rootStore.pageStore;
  const uiStore = rootStore.uiStore;
  domainStore.setDomainType("pre-interview");
  
  return (
        <GenericPageContainer className='pre-interview-page'>
          { !uiStore.isMobile ? 
            <PreInterViewLayout>
                 <LogoContainer src={Logo}/>
                 <ProgressBar store={uiStore} />
                 <Menu store={uiStore}/>
                 <SideBarImageWidget src={SideBarImage}/>
                 <SurveyView withNavigation = {true} store={pageStore}/>
              </PreInterViewLayout> 
               :
            <SurveyDomainLayout>
                 <LogoContainer src={Logo}/>
                 <ProgressBar store={uiStore} />
                 <Menu store={uiStore}/>
                 <SurveyView store={pageStore}/>
          </SurveyDomainLayout>
          }
        </GenericPageContainer>
  )
})
//
export default  PreInterviewPage;
