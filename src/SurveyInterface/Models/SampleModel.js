import { observable, computed, action, decorate, configure} from "mobx";
configure({ enforceActions: 'observed' })
class SampleModel {
    /**
     *
     * @param {*} storeOwner-Store Owner-Owned By This Store Instance
     */
    id= null;
    constructor(storeOwner) {
        this.store = storeOwner;
        
    }
    
    
    
}



export default  SampleModel
