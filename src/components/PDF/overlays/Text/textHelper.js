function getTextHighlightPosition({ x, y, width, height }, scale) {
  return {
    left: x *scale,
    top: y *scale ,
    width: width*scale,
    height: height*scale,
  };
}

function getTextPosition({ x, y },scale) {
  return {
    left: x *scale,
    top: y *scale ,
  };
}

export { getTextHighlightPosition, getTextPosition };