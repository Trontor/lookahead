const colors = ["#66CDAA", "#FC7C70", "#FEBF5D", "#8963CA", "#84B4C8"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// shuffleArray(colors);
export default colors.reverse();
