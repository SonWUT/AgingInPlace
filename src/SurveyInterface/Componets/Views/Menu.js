import React from "react";
import { observer } from 'mobx-react';
import  MenuIcon from '../../Assets/image/svg/Menu.svg' ;
import '../../Assets/sass/Views/Menu.scss' ;

function Menu(props) {
    const store = props.store;
    const className = props.className ? props.className : "";
    const  float = props.float ? "float" : "";
    return (
        <div onClick={store.openMenu} className={`menu-container ${className} ${float}`}>
              <svg id="toggle-menu-id" data-src={ MenuIcon} data-css-scoping="disabled" />
        </div>
    );
  
}
export default observer(Menu);