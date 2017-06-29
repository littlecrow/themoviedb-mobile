const MAX_LENGTH = 25;

export const reduceText = (text, length = MAX_LENGTH) => {
  let words = text.split(' ');
  let parts = [];
  for(let i=0; i<words.length; i++) {
    if(i < length) {
      if(i == length - 1)
        parts.push(words[i] + ' ...');
      else
        parts.push(words[i]);
    }
  }

  return parts.join(" ");
};
