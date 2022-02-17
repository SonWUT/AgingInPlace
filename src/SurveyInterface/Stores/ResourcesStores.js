// import {defineProp}  from "../Gobals/defineProps";
import ResourceModel from "../Models/ResourceModel";
import { makeObservable, observable, computed, action} from "mobx";



export default class ResourcesStores {
    store_owner = null;
    resource_objs = [];
    paginationCount = 1000;
    itemsShow = 1000;
    constructor(store=null){
        this.store_owner = store;
        makeObservable(this, {
            itemsShow  : observable,
            getMatchingResourcesPagination : computed,
            incrementPagination : action,
            hasMore : computed

        })
        
    
    }

    loadResources(resources_array_json =[]){
        this.resource_objs = resources_array_json.map(resource_json=>{
            return new ResourceModel(this,resource_json);
        })

    }

    getMatchingResources(){
        let choiceStore = this.store_owner.choiceStore;
        let matchingResources = this.resource_objs.filter(resource_obj=>{
            return resource_obj.isMatch(choiceStore.selectChoicesToArray());
        })
        return matchingResources;



    }
    getMatchingResources(){
        const choiceStore = this.store_owner.choiceStore;
        // const matchingResources = this.resource_objs;
        const matchingResources = this.resource_objs.filter(resource_obj=>{
            return resource_obj.isMatch(choiceStore.selectChoicesToArray());
        })
        //
        return matchingResources ;




    }
    get getMatchingResourcesPagination(){
        let viewableResources = this.getMatchingResources();
        viewableResources = [...this.getMatchingResources()].sort((a,b)=>{
            return a.description.length < b.description.length 
        });
        viewableResources = this.getMatchingResources().slice(0,  this.itemsShow);
        return viewableResources;
    }

    incrementPagination =()=>{
        this.itemsShow = Math.min((this.itemsShow + this.paginationCount ), this.getMatchingResources().length);
    }

    get hasMore (){
        return this.itemsShow < this.getMatchingResources().length;
    }

    
}

