import React from "react";
import { observer } from "mobx-react";
import "../../Assets/sass/Componet/ChoiceInstance.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

//Component for individual choice options
function ChoiceInstance(props) {
  const index = props.index;
  const model = props.model;
  const style = props.style;
    console.log(model);
  if (model.owner.can_multiple_answers) console.log("multi true");
  return (
    <div style={style} className="choice-instance">
      <input
        onChange={model.toggleSection}
        key={model.id}
        id={model.id}
        type="checkbox"
        checked={model.selected ? "checked" : ""}
      />
      {model.owner.can_multiple_answers ? (
        <div className="selection-box">
          {model.isSelected ? <FontAwesomeIcon icon={faCheck} size="xs"/> : ""}
        </div>
      ) : (
        ""
      )}
      <div className="question-label">{model.label}</div>
    </div>
  );
}

export default observer(ChoiceInstance);
