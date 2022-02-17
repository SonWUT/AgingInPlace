import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import "../Assets/sass/PreSurvey.scss"
import { useStores } from '../hooks/use-stores'
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import  PreSurveyLayout from "../Componets/Layout/PreSurveyLayout.js";
import SideBarImageWidget from "../Componets/ElementComponet/SideImage";
import SideBarImage from "../Assets/image/svg/RightSideBarImage.svg";
import PreSurveyInfoView from "../Componets/Views/PreSurveyInfoView";
import{ useEffect } from 'react';
const PreSurveyPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const pageStore = rootStore.pageStore;
  domainStore.getNextDomain();
  useEffect(() => {
    
  });
  return (
      <GenericPageContainer>
          <PreSurveyLayout>
            <PreSurveyInfoView store={pageStore} />
            <SideBarImageWidget src={SideBarImage}/>
          </PreSurveyLayout>
      </GenericPageContainer>
  )
})

export default PreSurveyPage;
