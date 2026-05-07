import React from "react";
import CheckboxOverlay from "./overlays/Checkbox/CheckboxOverlay";
import TextOverlay from "./overlays/Text/TextOverlay";
import ToggleOverlay from "./overlays/Toggle/ToggleOverlay";

// Overlays for different field types to highlight selection/updation and display values
function BaseOverlay({ field, isActive }) {
  if (field.type === "toggle") {
    return <ToggleOverlay field={field} />;
  }
  if (field.type === "text" || field.type === "number" || field.type === "date") {
    return <TextOverlay field={field} isActive={isActive} />;
  }
  if (field.type === "checkbox") {
    return <CheckboxOverlay field={field} isActive={isActive} />;
  }
  return null;
}
export default React.memo(BaseOverlay);