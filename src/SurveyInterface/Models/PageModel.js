import { observable, computed, action,configure,makeObservable} from "mobx";
import defineProp from "../Gobals/defineProps";

configure({ enforceActions: 'observed' })

class PageModel{
    //id for the page 
    id= null;
    //store owner parent object
    store = null;
    //unique slug for the page 
    slug = "";
    //label for the page
    label = "";
    //the questions modal for this page
    questions= [];
    //image id 
    image_id = 12;
    //logic that define how pages are transiton to based on the current choices
    logic = {};
    //extra info for the page 
    info = "";
     //percentage this page represents 
    percentage = 0;
    //does this page have skippable questions
    questionsSkip = false;
    //paginaiton for questions
    questionsShow = 1;
    constructor(storeOwner, modal_json, questions_objs=[]) {
        //Modal must have a parent
        this.store = storeOwner;
        let params_needed = ["id","slug", "label","questionsSkip","image_id", "logic","isRoot", 'info','percentage'];
        params_needed.forEach(param=>{
            if (param in modal_json){
                defineProp(this,param,modal_json[param]);
            }
        });
        this.setQuestionsObjects(questions_objs,modal_json['question_ids']);
        makeObservable(this, {
            questionsShow : observable,
            getQuestions :computed,
            setMoreQuestion :action,
            hasMoreQuestion : computed
        })
    } 
    //get quesitions modals
    get getQuestions(){
        if (this.questionsSkip){
            let viewableQuestions = this.questions.slice(0,  this.questionsShow);
            return viewableQuestions;
        }
        else{
            return this.questions;
        }
    }
    //increae pagination 
    setMoreQuestion = ()=>{
        this.questionsShow = Math.min((this.questionsShow + 1 ), this.questions.length);
    }
    //does the page has more questons to show based on the current pagination position
    get hasMoreQuestion (){

    
    }
    //call back in crease pagination
    getSetMoreQuestionCallBack = ()=>{
        if (this.questionsSkip && this.questionsShow < this.questions.length ){
            return this.setMoreQuestion;
        }
        else{
            return false;
        }
    }
     //maps the all question objects to the correct 
    setQuestionsObjects =(question_objs, question_ids)=>{
       //take all questions objects and  maps then based on the provide question id
        let question_objects = question_objs.filter(question=>{
            return question_ids.includes(question.id);
        });
        this.questions = question_objects;
    }
    //clear answer for all questions pertaining to this page
    clearQuestion =()=>{
        this.questions.forEach(question=>{
            question.clearAnswers();
        })
    }
    ///gets next page to transistion based on the current selected choices
    getNextPage(choicesStore= null){
       if (this.logic){
         if ("next_page" in this.logic && Boolean(this.logic["next_page"])){
             return {id: this.logic['next_page'] };
         }
         else if("slug" in this.logic && Boolean(this.logic["slug"])){
            
            return {slug: this.logic['slug'] };
        }
        else if("conditionals" in this.logic && Boolean(this.logic["conditionals"])
        ){
            
            if (choicesStore){
                let keys = Object.keys(this.logic['conditionals']);
                let choices = choicesStore.getChoices(keys);
                let selectedChoice = choicesStore.getSelectedChoices(choices);
                let selectedChoice_id =  selectedChoice.length ? selectedChoice[0].id : null;
                let nextPageId = this.logic['conditionals'][selectedChoice_id];
                return {id: nextPageId };
                
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
       }
    }


} 


export default  PageModel;
