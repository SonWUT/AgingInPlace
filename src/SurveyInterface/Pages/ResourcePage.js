import React  from "react";
import {observer} from 'mobx-react';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import DomainView from "../Componets/Views/DomainView";
import { useStores } from '../hooks/use-stores'
import ProgressBar from "../Componets/Views/ProgressBar";
import ResourcesLayout from "../Componets/Layout/ResourcesLayout";
import LogoContainer from "../Componets/ElementComponet/LogoContainer";
import SideBarImageWidget from "../Componets/ElementComponet/SideImage";
import SideBarImage from "../Assets/image/svg/LeftSideBarImage.svg";
import Menu from "../Componets/Views/Menu";
import Logo from "../Assets/image/svg/Logo.svg";
import ThankYouLogo from "../Assets/image/svg/ThankYouLogo.svg";

import ResouceView from "../Componets/Views/ResourseView";
import "../Assets/sass/Pages/ResourcePage.scss";
import{useEffect } from 'react';
const ResourcePage = observer((props) => {
   //
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const pageStore = rootStore.pageStore;
  const uiStore = rootStore.uiStore;
  const resourcesStore = rootStore.resourcesStore;
  domainStore.setCurrentDomainComplete();
  useEffect(() => {
   
  });
  //
  return (
    <GenericPageContainer className="resource-page">
      <Menu store={uiStore} float/>
      <ResourcesLayout>
        <LogoContainer className='aging-logo' src={Logo}/>
        <LogoContainer className='thank-you-logo' src={ThankYouLogo}/>
        <div className='info'>
          Thank you for using the Postive Aging Portal! 
          Here are some resources that are based on your responses to the questions today. 
          As we go about our lives, things may change, and our answers to these questions may 
          change as well. Ongoing reflection can be useful in identifying changes in our needs and 
          what supports might help us. Coming back and checking out the domains in this 
          portal from time to time may be helpful as you continue to think about what you need 
          to age at home and stay connected to your community. 
        </div>
        <ResouceView store={resourcesStore} />
      </ResourcesLayout>
    </GenericPageContainer>
  );
})
//
export default  ResourcePage;
