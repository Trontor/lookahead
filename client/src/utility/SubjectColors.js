const colors = [
  "#AFEEEE", //pale plue
  "#B5ECAA", //light green
  "#66CDAA", //dark green
  "#84B4C8", //ice blue
  "#99CEFF", //baby blue
  "#FF99CD", //pink
  "#D581E8", //violet
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
