export function filterMusicByGenre(genre, arr) {
  return arr.filter((it) => it.genre.toLowerCase() === genre.toLowerCase());
}
