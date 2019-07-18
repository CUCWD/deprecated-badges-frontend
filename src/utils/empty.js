/*
Check to see if an object is empty or not.
https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
 */
export const isEmptyObject = (obj) => {
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
