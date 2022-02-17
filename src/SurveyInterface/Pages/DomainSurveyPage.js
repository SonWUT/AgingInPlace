import React /*,{Component}*/ from "react";
import {observer} from 'mobx-react';
import { useStores } from '../hooks/use-stores';
import GenericPageContainer from "../Componets/Containers/GenericPageContainer";
import ProgressBar from "../Componets/Views/ProgressBar";
import SurveyView from "../Componets/Views/SurveyView";
import SurveyDomainLayout from "../Componets/Layout/SurveyDomainLayout"
import LogoContainer from "../Componets/ElementComponet/LogoContainer";
import Menu from "../Componets/Views/Menu";
import PatternLogo from "../Assets/image/svg/PatternLogo.svg";
import "../Assets/sass/Pages/DomainSurveyPage.scss";
import{useEffect } from 'react';
const DomainSurveyPage = observer((props) => {
  const { rootStore } = useStores();
  const domainStore = rootStore.domainStore;
  const pageStore = rootStore.pageStore;
  //go to the next page when on this viewabl
  pageStore.goNext();
  //
  const uiStore = rootStore.uiStore;
  useEffect(() => {
    
  });

  //domainStore.getNextDomain();
  //let slug= props.match.params.slug;
  return (
        <GenericPageContainer>
            <SurveyDomainLayout>
                 <LogoContainer src={ PatternLogo} className='pattern-logo' />
                 <ProgressBar store={uiStore} />
                 <Menu store={uiStore}/>
                 <SurveyView store={pageStore}/>
            </SurveyDomainLayout>
        </GenericPageContainer>
  )
})
//
export default  DomainSurveyPage;
