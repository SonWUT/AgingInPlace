
import { makeObservable } from "mobx";
import {observable, computed,action} from "mobx";
/**
 * /Choice Store
 */
export default class ChoiceStore {
    choices = []
    store = null;
    constructor(store=null){
        this.store = store;
        const questionStore = this.store.questionStore;
        questionStore.getAllChoices().then(this.add_choices);
        
    }
    //
    add_choices =(choices)=>{
        this.choices = [...this.choices,...choices];
    }
    //
    getChoices =(choices=[])=>{
       return this.choices.filter(choice=>{
           return  choices.includes(choice.id);
       })
    }
    getSelectedChoices=(choices=[])=>{
        choices = choices.length ? choices : this.choices;
        return choices.filter(choices=>{
            return choices.isSelected;
        });
    }

    selectChoicesToArray=()=>{
        let choiceObjects = this.getSelectedChoices();
        return choiceObjects.map(choice=>{
            return  choice.id;
        })

    }

}