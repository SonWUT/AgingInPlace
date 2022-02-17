import { makeObservable, observable, action } from "mobx";
import UiStore from "./UiStore";
import QuestionsStore from "./QuestionsStore";
import PageStore from "./PageStore";
import ChoiceStore from "./ChoicesStore";
import questionJsonsPreInterview    from "../Data/PreInterView/Questions";
import questionJsonsPhysicalHealth   from "../Data/PhysicalHealthDomain/Questions";
import pageJsonPre   from "../Data/PreInterView/Pages";
import pageJsonPhysicalHealth   from "../Data/PhysicalHealthDomain/Pages";
import DomainStore from "./DomainStore";
import pyHResources from "../Data/PhysicalHealthDomain/Resources";
import DomainPage from "../Data/Domain/Pages";
import ResourcesStores from "./ResourcesStores";

/**
 * Root Store -Houses All Stores
 */
export default class RootStore {
    constructor(store=null){
        
        this.questionStore = new QuestionsStore(this,[...questionJsonsPreInterview,...questionJsonsPhysicalHealth] );
        this.choiceStore = new ChoiceStore(this);
        this.pageStore = new PageStore(this,[...pageJsonPre,...pageJsonPhysicalHealth,...DomainPage],this.questionStore,this.choiceStore);
        this.domainStore = new DomainStore(this,this.pageStore);
        this.uiStore = new UiStore(this);
        this.resourcesStore = new ResourcesStores(this,pyHResources);
        this.resourcesStore.loadResources(pyHResources);
        
    
    }
    
}