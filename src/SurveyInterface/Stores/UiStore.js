import { makeAutoObservable, observable,computed, action} from "mobx";
import { useHistory } from "react-router-dom";
import ProgressBarModel from "../Models/ProgressBarModel";

export default class UiStore {
    language = "en_US"
    pendingRequestCount = 0

    // .struct makes sure observer won't be signaled unless the
    // dimensions object changed in a deepEqual manner.
    windowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,

    }
    menuVisible = false;
    store = null;
    constructor(store=null) {
        this.store = store;
        makeAutoObservable(this, { 
            windowDimensions: observable.struct,
            menuVisible : observable,
            isMobile : computed,
            getMenuVisible :computed,
            closeMenu :action,
            openMenu : action
        })
        window.onresize = () => {
            this.windowDimensions =  UiStore.getWindowDimensions();
            this.fontSizeCorrector();
        }
        //
        this.fontSizeCorrector();
        this.pageStore = this.store.pageStore;
        this.domainStore =  this.store.domainStore;
        this.progressBarModel = new ProgressBarModel(this,this.pageStore,this.domainStore);

    }
    //
    static getWindowDimensions(){
        return {
            width: window.innerWidth,
            height: window.innerHeight,
          }
    }
    fontSizeCorrector = ()=>{
            let fontSizeReponsive = Math.min(Math.max((3.0/256.0) * this.windowDimensions.width + 6.0 , 15), 19.5);
            let root = document.documentElement;
            root.style.setProperty('--root-font-size', fontSizeReponsive + "px");
    }

    menuOpen = ()=>{
        let body = document.querySelector("body");
        if (this.getMenuVisible){
            body.classList.add("menu-open");
        }
        else{
            body.classList.remove("menu-open");
        }

    }

    get getMenuVisible(){
        return this.menuVisible;
    }

    closeMenu =()=>{
        this.menuVisible= false;
        this.menuOpen();
    }

    openMenu =()=>{
        this.menuVisible= true;
        this.menuOpen();
    }

    //
    get appIsInSync() {
        return this.pendingRequestCount === 0
    }

    get isMobile(){
        return this.windowDimensions.width < 768
    }
    

   
}