export const sub = (text: string) => {
  let newText = "";
  if (text.length > 13) {
    newText = text.substring(0, 10) + "...";
    return newText;
  } else {
    return text;
  }
};
