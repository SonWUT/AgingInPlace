// import axios from "axios";
 import {observable, action, configure, decorate, reaction, computed} from "mobx";

configure({ enforceActions: 'observed' })

class ServeyServices {

    
}


decorate(ServeyServices, {
    //sample for later 
    // webSocketisConnected : observable,
    // isLoggin :observable,
    // webSocketisConnected : observable, 
    // setConnectedWebSocketFlag: action,
    // setLoggedIn: action,
    // setWebSocketError: action

})
export default ServeyServices
