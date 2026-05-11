import { memo } from "react";
import { spaceDigits } from "@/utils/formatter";
import { getTextHighlightPosition, getTextPosition } from "./textHelper";

// Overlay for text/number inputs
function TextOverlay({ field, scale, isActive }) {
  const rect = field.rect;
  if (!rect) return null;
  console.log(TextOverlay, field)

  return (
    <>
      <TextHighlight rect={rect} isActive={isActive} scale={scale} />
      <TextValue rect={rect} field={field} scale={scale}/>
    </>
  );
}

// Display value inside input
const TextValue = memo(function ({ rect, field, scale }) {
  const isNumber = field.type === "number";
  return (
    <div
      className="absolute text-sm pointer-events-none"
      style={getTextPosition(rect,scale)}
    >
      {isNumber ? spaceDigits(field.value) : field.value}
    </div>
  );
})

// Highlight input box on selection/update
const TextHighlight = memo(function({ rect, isActive, scale }) {
  const style = getTextHighlightPosition(rect,scale);

  return (
      <div
        className={` absolute ${isActive ? "border-2 border-red-500 bg-red-500/15" : "border-0"}`}
        style={style}
      />
  );
})

export default memo(TextOverlay);