import React  from "react";
import {observer} from 'mobx-react';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import DomainView from "../Componets/Views/DomainView";
import { useStores } from '../hooks/use-stores'
import ProgressBar from "../Componets/Views/ProgressBar";
import PreInterViewLayout from "../Componets/Layout/PreInterviewLayout";
import LogoContainer from "../Componets/ElementComponet/LogoContainer";
import SideBarImageWidget from "../Componets/ElementComponet/SideImage";
import SideBarImage from "../Assets/image/svg/LeftSideBarImage.svg";
import Menu from "../Componets/Views/Menu";
import Logo from "../Assets/image/svg/Logo.svg";
import HeaderBanner from "../Componets/ElementComponet/HeaderBanner";
import HeaderBannerImage from "../Assets/image/svg/HeaderBanner.svg";
import MobileHeaderBannerImage from "../Assets/image/svg/HeaderBannerMobile.svg";
import{useEffect } from 'react';
const DomainPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const uiStore = rootStore.uiStore;
  useEffect(() => {
    domainStore.setCurrentDomainComplete();
    domainStore.setDomainType("domain-page");
  });
  return (
    
    <GenericPageContainer>
      { !uiStore.isMobile ? 
      <PreInterViewLayout>
        <LogoContainer src={Logo}/>
        <ProgressBar store={uiStore} />
        <Menu store={uiStore}/>
        <SideBarImageWidget src={SideBarImage}/>
        <DomainView store={domainStore}/>
      </PreInterViewLayout> :
      <PreInterViewLayout>
            <LogoContainer src={Logo}/>
            <ProgressBar store={uiStore} />
            <Menu store={uiStore}/>
            <HeaderBanner className="domain-survey-page-banner" src={HeaderBannerImage} mobileSrc={MobileHeaderBannerImage}/>
            <DomainView store={domainStore}/>
    </PreInterViewLayout>
      }
    </GenericPageContainer>
  );
})
//
export default  DomainPage;
