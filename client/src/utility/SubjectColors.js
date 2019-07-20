const colors = [
  "#84B4C8", //dark ice blue
  "#B5ECAA", //light green
  "#66CDAA", //dark green
  "#FF99CD", //pink
  "#D581E8", //violet
  "#AFEEEE", //pale plue
  "#87B7ED", //baby blue
  "#9382F0", //lavender
  "#FC7C70", //red
  "#FEBF5D" //orange
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// shuffleArray(colors);
export default colors;
