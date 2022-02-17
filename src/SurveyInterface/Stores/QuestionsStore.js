// import {defineProp}  from "../Gobals/defineProps";
import QuestionModel from "../Models/QuestionModel";
import { makeObservable } from "mobx";
/**
 * Root Store 
 */
export default class QuestionsStore {
    store_owner = null;
    questions_objs = [];
    constructor(store=null,question_json_array = []){
        this.store_owner = store;
        makeObservable(this, {
           
        })
        if (question_json_array){
            this.setUpObjs(question_json_array);
        }
    
    }

    setUpObjs = (question_json_array)=>{
        let  question_objs = question_json_array.map(question_obj=>{
            return new QuestionModel(this,question_obj);
        })
        this.questions_objs  = question_objs;
    }
    getQuestions(){
        return new Promise((resolve, reject) => {
            if (this.questions_objs.length){
                resolve(this.questions_objs);
            }
            else{
                
            }
            
        })
    }

    async getQuestionAsync(){
        let questions = await this.getQuestions();
        return questions;
    }

    getAllChoices(){
        return this.getQuestions().then(questions=>{
            let choices = [];
            questions.forEach(question=>{
                choices = [...choices,...question.choices];
            });
            return choices;
        })
    }

    
}

