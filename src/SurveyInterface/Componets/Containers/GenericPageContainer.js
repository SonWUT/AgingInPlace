import React /*,{Component}*/ from "react";
import "../../Assets/sass/Containers/GenericPageContainer.scss"
const GenericPageContainer = (props) => {
  let style = props.style
  return (
      <div style={style} className={`react-transition fade-in inner-page-container ${props.className}`}>
         <div className='inner-container'>
             {props.children}
         </div>
      </div>
  )
}
//
export default GenericPageContainer ;
