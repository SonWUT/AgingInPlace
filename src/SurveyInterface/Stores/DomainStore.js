// import {defineProp}  from "../Gobals/defineProps";
import DomainModel from "../Models/DomainModel";
import { makeObservable,observable,computed, action } from "mobx";
import domainJson from "../Data/Domain/Domain";
/**
 * Page Store
 */
export default class DomainStore {
    store = null;
    current_domain = null;
    domains = [];
    pageStore = null;
    //
    constructor(store=null,pageStore= null){
        //store
        makeObservable(this, {
            current_domain : observable,
            getViewableDomains : computed,
            getCompleted : computed,
            getInCompleted : computed,
            getNextDomain : action,
            setCurrentDomainComplete : action
        });
        //
        this.store = store;
        this.pageStore = pageStore;
        this.getDomain();
       
    }
    //
    setDomainType=(domainType)=>{
       let foundDomain = this.domains.find(domain=>{
           return domain.id === domainType;
       });
       if (foundDomain){
           this.pageStore.setDomainType(foundDomain.id);
           this.current_domain  = foundDomain;
           this.current_domain.setInComplete();
       }
    }
    loadDomain =(domainsJson)=>{
        let domainObjects = domainsJson.map(domain=>{
            return new DomainModel(this,domain);
        });
        ///
        this.domains = domainObjects;
    }

    getDomain(){

        this.loadDomain(domainJson);
    }

    getAlDomain(){
        return this.domains;
    }
    //
    get getViewableDomains(){
        let view_able_domains = this.domains.filter(domain=>{
            return domain.viewable;
        });
        return view_able_domains;
    }

    setCurrentDomainComplete(){
        if (this.current_domain){
            this.current_domain.setComplete();
        }
    }
    //
    get getCompleted(){
        
        let completedDomain = this.domains.filter(domain=>{
            return domain.isComplete;
        });
        return completedDomain;
    }

    get getInCompleted(){
       
        let inCompletedDomain = this.domains.filter(domain=>{
            return  domain.isSelected &&  !domain.isComplete;
        });
        return inCompletedDomain;
    }

    get getInProgress(){
        return this.current_domain;
    }

    getNextDomain = ()=>{
        let incompleteDomains = this.getInCompleted;
        if (incompleteDomains.length){
            let next_domain = incompleteDomains.find(domain=>{
                return true;
            })
            if (this.current_domain){
                this.current_domain.setComplete();
            }
            this.setDomainType(next_domain.id);
           
        }
        else {
            return null;
        }


    }

}