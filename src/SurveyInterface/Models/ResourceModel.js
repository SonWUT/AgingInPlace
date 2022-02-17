import {reaction,  makeObservable, observable, computed, action, decorate, configure} from "mobx";
import defineProp from "../Gobals/defineProps";
configure({ enforceActions: 'observed' })

class ResourceModel{
    
    id= null;
    store = null;
    label="";
    description =""
    phone ="";
    email ="";
    website ="";
    Condition ="";
    Category = "";
    categoryColor = {
        'Preventative Screening Tests & Medical Care' : '#62CBD5',
        'Medical Decision Making' : '#F9AC56',
        'Reducing Physical Health Risks' : '#00588A',
        'Healthy Eating & Food Security' : '#3BAF78',
        'Physical Activity' : '#002F53',
        'Medication Reminders' : '#F3685A' ,
        'Healthcare Provider' : '#4EAF78' ,
        'Medical History & Pre-Exisiting Conditions' : '#E37C42',
        'Culturally Appropriate or Culturally Safe Care' : '#F8B532' 
    }
    constructor(storeOwner, modal_json) {
        
        //Modal must have a parent
        this.store = storeOwner;
        let params_needed = ["id",'label','description','phone','email','website','Condition',"Category"];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        });
        
    }
    isMatch(list_selected_choices){
        const conditions = this.Condition;
        //map the condtions to booleans values
        let  boolean_map = conditions.map(cond=>{
            return cond.filter(x => list_selected_choices.includes(x)).length ?  true : false;
        })
        return !boolean_map.includes(false);

    }
    getCategoryColor =()=>{
        return this.categoryColor[this.Category];
    }

    
}



export default  ResourceModel;
