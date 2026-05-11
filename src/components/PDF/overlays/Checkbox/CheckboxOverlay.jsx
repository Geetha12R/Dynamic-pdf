import { memo } from "react";
import { getCheckboxPosition } from "./checkboxHelper";

function CheckboxOverlay({ field }) {
  const rect = field.rect;
  const isChecked = Boolean(field.value);
  if (!rect) return null;
  return (
    <div
      className="absolute flex items-center justify-center bg-red-500 text-white border-0 rounded"
      style={getCheckboxPosition(rect)}
    >
      {/* On selection of checkbox, displays tick */}
      {isChecked && (
        <span className="text-xs font-bold text-white">
          ✓
        </span>
      )}
    </div>
  );
}
export default memo(CheckboxOverlay);