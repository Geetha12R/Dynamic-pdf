import React from "react";
import { getTogglePosition, toggleMarkerBaseClass } from "./toggleHelper";

// Overlay to exhibit toggle functionality over PDF view for Radio buttons
export default function ToggleOverlay({ field }) {
  const { options, value, id } = field;

  return Object.entries(options)
    .map(([key, opt]) => (
      <ToggleMarker
        key={`${id}-${key}`}
        rect={opt.rect}
        selected={value === key}
      />
    ));
}

// On selection, show black filled circle inside the to indicate its selected
const ToggleMarker = React.memo(function({ rect, selected }) {
  const style = getTogglePosition(rect, selected);

  return (
    <div className={toggleMarkerBaseClass(selected)} style={style}>
      {selected && <div className="w-2 h-2 rounded-full bg-black" />}
    </div>
  );
});



