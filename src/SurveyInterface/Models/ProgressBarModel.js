import { makeObservable,observable, computed, action, configure} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' });

//represents the current progress
class ProgressBarModel{
    //parent owner 
    owner = null;
    constructor(storeOwner, pageStore= null, domainStore= null) {
        //mobx
        this.owner = storeOwner;
        makeObservable(this, {
            getCompletedDomains :computed,
            getInProgressDomains : computed,
            getPercentageDomain :computed,
            getCurrentPageLabel :computed,
            getViewableDomains : computed,
        });
        this.pageStore = pageStore;
        this.domainStore = domainStore;

        
    }
    get getCompletedDomains(){
        if (this.domainStore) {
            return this.domainStore.getCompleted;
        }
        else{
            return [];
        }
    }

    get getInProgressDomains(){
        if (this.domainStore) {
            return this.domainStore.getInCompleted;
        }
        else{
            return [];
        }
    }

    get getCurrentPageLabel(){
        return this.pageStore.getCurrentPage.label;
    }

    get getViewableDomains(){
        return this.domainStore.getViewableDomains;
    }

    get getPercentageDomain(){
        if (this.pageStore){
            if (this.pageStore.getCurrentPage){
                return this.pageStore.getCurrentPage.percentage;
            }
        }
        else{
            return 0;
        }
    }
    
}



export default  ProgressBarModel;
