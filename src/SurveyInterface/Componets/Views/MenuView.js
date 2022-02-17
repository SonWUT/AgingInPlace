import React from "react";
import { observer } from 'mobx-react';
import "../../Assets/sass/Views/MenuView.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import menuBackground from "../../Assets/image/svg/MenuBackground.svg";
import closeButton from "../../Assets/image/svg/closeButton.svg";
//Component
function MenuView(props) {
    const store = props.store;
    const history = useHistory();
    const isActive  = store.getMenuVisible ? "active" : "";
    let dateObject = new Date();
    let year =  dateObject.getFullYear();
    return (
        <div className={`menu-view ${isActive}`}> 
                <div className='close-button' onClick={store.closeMenu}>
                    <svg id='close-button-id' data-src={closeButton} data-css-scoping="disabled" />
                </div>
                <div className='background' >
                    <img src={menuBackground}/>
                </div>
                <div className="menu-links">
                    <div className='inner-container'>
                        <Link onClick={store.closeMenu} to ={"/"}className='menu-link'> Home </Link> 
                        <Link onClick={store.closeMenu}  className='menu-link'> Contact </Link> 
                        <Link onClick={store.closeMenu}  className='menu-link' onClick={history.goBack}> Previous </Link> 
                        <Link onClick={store.closeMenu}  className='menu-link' onClick={history.goForward}> Next </Link> 
                    </div>
                </div>
                <div className='additional-info-menu'>
                            <div className='copy-right'>
                                    © {year} Copyright 
                            </div>
                            <div className='policy'>
                                <a hef=''>Privacy Policy</a>
                            </div>
                            <div className='credit'>
                               <a>
                                Designed by WE•US•THEM
                               </a>
                            </div>
               </div>
        </div>
    );
  
}
export default observer(MenuView);
