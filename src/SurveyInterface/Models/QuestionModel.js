import {reaction,  makeObservable, observable, computed, action, decorate, configure} from "mobx";
import defineProp from "../Gobals/defineProps";
import ChoiceModel from  "./ChoiceModel";

configure({ enforceActions: 'observed' })
// let question_sample = {
//     "id": "2.1",
//     "slug": "what-is-this-for",
//     "label_pretty": "What Is this For?",
//     "label": "Who brought you to the website today?",
//     "choices": [{
//             "choice_id": "2.1.1",
//             "label": "I am here For Myself",
//         },
//         {
//             "choice_id": "2.1.2",
//             "label": "I am here for a famly member..",
//         },
//         {
//             "choice_id": "2.1.3",
//             "label": "I am here for a famly multiple..",
//         }
//     ],
//     "image_id": 2,
//     'can_multiple_answers' : false
// }
class QuestionModel{
    
    id= null;
    store = null;
    slug = "";
    label_pretty = "";
    choices = [];
    image_id = 12;
    can_multiple_answers = false;
    isHidden  = false;
    constructor(storeOwner, modal_json) {
        makeObservable(this, {
            hasAnswered : computed,
            clearAnswers: action
        });
        //Modal must have a parent
        this.store = storeOwner;
        let params_needed = ["id","slug", "label_pretty",'label',"image_id", 
        "can_multiple_answers","require_answer"];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        });
        //
        this.jsonToModelChoice(modal_json["choices"]);
        

        
    }

    get hasAnswered (){
        
        let filterd_choice = this.choices.find(choice=>{
            return choice.isSelected;
        })
        if (filterd_choice){
            return true;
        }
        else{
            return false;
        }
    }

    isRequired(){
        return this.require_answer;
    }

    clearAnswers = ()=>{
        this.choices.forEach(choice=>{
            choice.setStatus(false);
        });
    }


    jsonToModelChoice = (modal_json_list)=>{
        this.choices =modal_json_list.map(modal_json=>{
            return new ChoiceModel(this,modal_json);
        });
       
    }
    /**
     * 
     * @param {*} id - choice id
     * Check if the question modal has a certain cquestion
     */
    hasChoice(id){

    }
    /**
     * 
     * @param {*} id - choice id
     * Checks if the 
     */
    choiceSelected(id){

    }

    hasSelectedSelection(){
       this.choices.forEach(choice=>{
           if (choice.selected){
               return true
           }
       });
       return false;

    }

    newSelected = (choice_object)=>{
       
       if (!this.can_multiple_answers){
           let filtered_choices = this.choices.filter(choice=>{
                return choice.selected && (choice_object.id !==  choice.id);
           });

           filtered_choices.forEach(choice=>{
               choice.setStatus(false);
           })
       }
    }
    
}



export default  QuestionModel;
