const colors = [
  "#B5ECAA",
  "#66CDAA",
  "#84B4C8",
  "#AFEEEE",
  "#99CEFF",
  "#9B73DF",
  "#D581E8",
  "#FF99CD",
  "#FC7C70",
  "#FEBF5D"
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// shuffleArray(colors);
export default colors;
