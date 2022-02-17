import { makeObservable,observable, computed, action, configure} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' });

//used to represent choice meta information
class ChoiceModel{
    //choice id
    id = null;
    //the store the owns this modal - parent object
    owner = null;
    //is this choice selected
    selected = false;
    constructor(storeOwner, modal_json) {
        //mobx make certain attributes selectable
        makeObservable(this, {
            selected:observable,
            getSelectionStatus : computed,
            setStatus : action,
            toggleSection : action,
            isSelected : computed

        });
        //Modal must have a parent
        this.owner = storeOwner;
        let params_needed = ["id","label"];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        })

        
    }
    //computed to check if the modal has been selected by the user
    get isSelected(){
        return this.selected;
    }
    //toggle selection
    toggleSection =()=>{
        this.selected  = !this.selected;
        if (this.selected){
            this.signalParent();
        }
    }
    //get selection status
    get getSelectionStatus  (){

        return this.selected;
    }  
    //manually set the selection flag
    setStatus =(flag)=>{
        this.selected = flag;
    }
    //signal to parent the value has been changed 
    signalParent =()=>{
        if (typeof this.owner["newSelected"] == "function") {
            this.owner.newSelected(this);
        }
    }
}



export default  ChoiceModel;
