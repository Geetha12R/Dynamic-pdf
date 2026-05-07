// Base tailwind classes for radio button styles
export function toggleMarkerBaseClass(selected) {
  return [
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "transition-all",
    "duration-150",
    selected
      ? "border-2 border-red-500 w-[18px] h-[18px]"
      : "border border-transparent w-[14px] h-[14px]",
  ].join(" ");
}

// Gets toggle element position to fill
export function getTogglePosition(rect, selected) {
  const offset = selected ? 2 : 0;

  return {
    left: rect.x - offset,
    top: rect.y - offset,
  };
}