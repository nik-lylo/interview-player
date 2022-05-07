export function checkPopupObject(object) {
  console.log(object);

  for (let key in object) {
    if (object[key] === "") {
      return false;
    }
  }
  return true;
}
