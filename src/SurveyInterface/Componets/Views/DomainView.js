import React from "react";
import { observer } from 'mobx-react';
import DomainChoice from "../ElementComponet/DomainChoice";
import DomainNavView from "../Views/DomainNavView";
import "../../Assets/sass/Views/DomainView.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
//Component
function MenuView(props) {
    const store = props.store;
    const domains = store.getViewableDomains ;
    return (
        <div className="domain-view">
             <div className='question-instace-container'>
              <div className='index'>
                    01
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
              </div>
              <div className='main-question-contanier'>
                        <div className='question-label-container'>
                        What are you interested in exploring during your online visit today?
                        </div>
              </div>
        </div>
            <div className="domain-view-inner">
                    {domains.map(domain=>{
                        return (
                        
                        <DomainChoice model={domain} />
                        
                        );
                    })}
            </div>
            <DomainNavView store={store}/>
         </div>
    );
  
}
export default observer(MenuView);
