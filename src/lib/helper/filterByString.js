export function filterBystring(str, arr) {
  if (str === "") return arr;
  const result = arr.filter((it) => {
    if (
      it.author.toLowerCase().includes(str.toLowerCase()) ||
      it.song.toLowerCase().includes(str.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  return result;
}
