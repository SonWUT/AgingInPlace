// import {defineProp}  from "../Gobals/defineProps";
import PageModel from "../Models/PageModel";
import { makeObservable } from "mobx";
import {observable, computed,action} from "mobx";
import { useHistory } from "react-router-dom";
/**
 * Page Store
 */
export default class PageStore {
    store = null;
    page_models = [];
    page_stack  = [];
    domain = "";
    page_stack_history = {};
    constructor(store=null,pageJson,questionStore = null, choicesStore=null){
        this.store = store;
        makeObservable(this, {
            page_stack  : observable,
            getCurrentPage : computed,
            setPageById : action,
            setDefaultPage : action,
            hasNext : computed,
            hasPrevious : computed,
            goNext: action,
            goPrevious :action,
            setDomainType :action,
            domain : observable,
            getLink: computed,
            getInfoRootPage : computed
        });
        
        if (questionStore){
            questionStore.getQuestions().then(this.setUpPages(pageJson));
        }
        this.choiceStore = choicesStore;
       
    }
    //
    get getLink(){
        if (this.hasNext){
            const current_page = this.getCurrentPage ? this.getCurrentPage : null ; 
            if (!current_page){
                return null;
            }
            const choiceStore = this.choiceStore ;
            let next_page_json = current_page.getNextPage(choiceStore);
            if ("slug" in next_page_json){
                return next_page_json["slug"]; 
            }
        }
        else{
            return null
        }
    }
    goNext =(currentPage = null)=>{
        const current_page = this.getCurrentPage ? this.getCurrentPage : null ; 
        if (!current_page){
            return null;
        }
        const choiceStore = this.choiceStore ;
        let next_page_json = current_page.getNextPage(choiceStore);
        if ("id" in next_page_json ){
            this.setPageById(next_page_json['id']);
        }
        else{
            return null;
        }
    }
    //
    goPrevious =()=>{
        this.clearPage();
        let new_page_stack = [...this.page_stack];
        new_page_stack.pop();
        this.page_stack = new_page_stack;
    }
    //
    clearPage(){
        let currentPage = this.getCurrentPage;
        currentPage.clearQuestion();
    }
    //
    get hasNext(){
        const current_page = this.getCurrentPage ? this.getCurrentPage : null ; 
        if (!current_page){
            return;
        }
        let hasNext = true;
        if (current_page){
            // 
            let filterd_question = current_page.questions.find(question=>{
                return question.isRequired() && !question.hasAnswered;
            })
            if (filterd_question){
                return false;
            }
        }
        return hasNext;
    }
    //
    get hasPrevious(){
        if (this.page_stack.length > 1){
            return true;
        }
        else{
            return false;
        }
    }
    //
    setPageById =(id = null)=>{
        if (id !== null){
            let pageToSet = this.page_models.filter(page=>{
                return page.id === id;
            })  
            if (pageToSet.length){
                let new_page_stack = [...this.page_stack];
                new_page_stack.push(pageToSet[0])
                this.page_stack = new_page_stack;
            }
            else{
                throw new Error("Error:No Page With That Id Exist Check Page: "+  pageToSet);
            }

        }
    }
    //
    get getCurrentPage(){
        if (this.page_stack.length > 0){
            const  current_page = this.page_stack.slice(-1).pop();
            return current_page;
        }
        else{
            return false;
        }
    }
    //
    setUpPages =(pageJson)=>{
       return (questions_objs)=>{
            let page_models = pageJson.map(item=>{
                return new PageModel(this,item,questions_objs);
            })
            this.page_models = page_models;
            this.setDefaultPage();
            
       }
       //set up root page
    }
    //
    clearQueue(){
        this.page_stack = [];
    }
    //
    setDomainType=(domainType)=>{
        //store old stack
        console.log(this.domain);
        if (this.domain && this.domain.length !== 0 ){

          this.page_stack_history[this.domain] = this.page_stack;
        }
        //restore old stack
        if(domainType in this.page_stack_history  ){
            this.page_stack = this.page_stack_history[domainType];
        }
        else{
            this.page_stack = [];
        }
        console.log(this.page_stack );
        this.domain  = domainType;
        this.setDefaultPage();
    }
    //
    setDefaultPage(){
        if (this.page_stack.length ){
            return;
        }
        this.page_models.forEach(page=>{
            if ("isRoot" in page & page["isRoot"]  === this.domain ){
                this.setPageById(page.id);
                return;
            }
        })
    }

    get getInfoRootPage(){
        let infoPage = this.page_models.find(page=>{
            return page.isRoot && page.info &&  page.info.length;
        }) 
        return infoPage;
    }

    
}