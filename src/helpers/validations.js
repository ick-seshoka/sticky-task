export const isColor = (colorCode) => {
  const style = new Option().style;
  style.color = colorCode;
  return style.color !== "";
};
