import React from "react";
import CheckboxOverlay from "./overlays/Checkbox/CheckboxOverlay";
import TextOverlay from "./overlays/Text/TextOverlay";
import ToggleOverlay from "./overlays/Toggle/ToggleOverlay";
import { useSelector } from "react-redux";


const OverlayMap = {
    text: TextOverlay,
    number: TextOverlay,
    date: TextOverlay,
    checkbox: CheckboxOverlay,
    toggle: ToggleOverlay,
  };

  
// Overlays for different field types to highlight selection/updation and display values
function BaseOverlay({ field, scale, isActive }) {
  console.log(BaseOverlay, field)
    const Component = OverlayMap[field.type];
    return Component ? <Component field={field} scale={scale} isActive={isActive} /> : null;
}

export default React.memo(BaseOverlay);
