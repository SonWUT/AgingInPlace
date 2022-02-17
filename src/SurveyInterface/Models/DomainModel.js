import { computed,action, observable, makeObservable, configure} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' })

//used to represent domain meta information
class DomainModel{
    //id of the domain
    id= null;
    //store owner
    store = null;
    //the slug id for the domain
    slug = "";
    //the label for the domain
    label = "";
    //image id /domain url for the image 
    image_id = null;
    //description for this domain 
    description = "";
    //the color code for this domain
    color = null;
    //represents if the domain is viewable
    viewable = true;
    //represents of the domain is selected
    isSelected = false;
    //represents whether the domain was completed by the user
    isComplete = false;
    //
    constructor(storeOwner, modal_json={}) {
        this.store = storeOwner;
        let params_needed = ["id","slug", "label",,"image_id","color",'description','viewable'];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        });
        //make certain fields computed , action or obserable
        makeObservable(this, {
            viewable  : observable,
            isSelected : observable,
            isComplete : observable,
            getIsSelected : computed,
            getisComplete : computed,
            toggleSection :action,
            setComplete : action,
            setInComplete : action,
            setSelection :action,
            unSetSelection :action

            
        })
    }
    //get selected  staus of the current domain
    get getIsSelected(){
        return this.isSelected;
    }
      //get selected  staus of the current domain if the domain has been completed
    get getisComplete(){
        return this.isComplete;
    }
    //toggle seletion status
    toggleSection =()=>{
        this.isSelected = !this.isSelected;
    }
    //set domain as completed
    setComplete = ()=>{
        this.isComplete = true;
    }
    //set domain as incomplete
    setInComplete =()=>{
        this.isComplete = false;
    }
    //set selection to true
    setSelection= ()=>{
        this.isSelected = true;
    }
    //unset the selection
    unSetSelection =()=>{
        this.isComplete = false;
    }


    
} 


export default  DomainModel;
