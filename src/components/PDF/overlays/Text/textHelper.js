function getTextHighlightPosition({ x, y, width, height }) {
  return {
    left: x - 1,
    top: y + 4,
    width,
    height,
  };
}

function getTextPosition({ x, y }) {
  return {
    left: x + 5,
    top: y + 5,
  };
}

export { getTextHighlightPosition, getTextPosition };