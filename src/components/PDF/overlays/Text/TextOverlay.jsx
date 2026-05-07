import { memo } from "react";
import { spaceDigits } from "@/utils/formatter";
import { getTextHighlightPosition, getTextPosition } from "./textHelper";

// Overlay for text/number inputs
function TextOverlay({ field, isActive }) {
  const rect = field.rect;
  if (!rect) return null;

  return (
    <>
      <TextHighlight rect={rect} isActive={isActive} />
      <TextValue rect={rect} field={field} />
    </>
  );
}

// Display value inside input
const TextValue = memo(function ({ rect, field }) {
  const isNumber = field.type === "number";
  return (
    <div
      className="absolute text-sm pointer-events-none"
      style={getTextPosition(rect)}
    >
      {isNumber ? spaceDigits(field.value) : field.value}
    </div>
  );
})

// Highlight input box on selection/update
const TextHighlight = memo(function({ rect, isActive }) {
  const style = getTextHighlightPosition(rect);

  return (
      <div
        className={` absolute ${isActive ? "border-2 border-red-500 bg-red-500/15" : "border-0"}`}
        style={style}
      />
  );
})

export default memo(TextOverlay);