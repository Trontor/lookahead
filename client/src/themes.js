const regularTheme = {
  /*=== Theme Name ===*/
  name: "regular",
  /*=== Header ===*/
  headerBg: "#29C7DB",
  /*=== Timetable (tt) Viewer ===*/
  ttBorderColor: "#ddd",
  ttTextColor: "#62656E",
  /*=== Body ===*/
  bodyBg: "#fbfbfb",
  /*=== Sidebar ===*/
  sidebarBg: "#f8f8f8",
  /*=== Subject List ===*/
  cardBg: "#fefefe",
  loadingGradient: "#D9E6F0",
  /*=== Global Text ===*/
  text: "#3f3844",
  /*=== Sponsor Special Buttons ===*/
  UMSUButtonBg: "rgb(104,33,122)",
  SponsorLogoBg: "inherit",
  SponsorFilter: "none",
  /*=== Reserved Event ===*/
  reservedBg: "transparent",
  reservedBorder: "2px dotted black",
  reservedText: "black",
  /*=== General ===*/
  main: "teal",
  mainDark: "#00626C",
  secondary: "deepskyblue",
  secondaryDark: "dodgerblue",
  accent: "#FF9C94",

  dragDropRegularEventOpacity: 0.15,
  dragDropEventBorder: "2px dotted green",
  dragDropEventBg: "red"
};

const darkTheme = {
  /*=== Theme Name ===*/
  name: "dark",
  /*=== Header ===*/
  headerBg: "#3A3A46",
  /*===Timetable (tt) Viewer===*/
  ttBorderColor: "#454554",
  ttTextColor: "#ddd",
  /*=== Body ===*/
  bodyBg: "#363642",
  /*=== Sidebar ===*/
  sidebarBg: "#32323C",
  /*=== Subject List ===*/
  cardBg: "#3C3C4F",
  loadingGradient: "#5E5C87",
  /*=== Global Text ===*/
  text: "#f5f5f5",
  /*=== Sponsor Special Buttons ===*/
  UMSUButtonBg: "#8B259B",
  SponsorLogoBg: "inherit",
  SponsorFilter: "invert(1) grayscale(100%) brightness(300%)",
  /*=== Reserved Event ===*/
  reservedBg: "transparent",
  reservedBorder: "2px dotted white",
  reservedText: "white",
  /*=== General ===*/
  main: "#403F4C",
  mainDark: "#4A395D",
  secondary: "#524864",
  secondaryDark: "#562876",
  accent: "mediumslateblue",

  dragDropRegularEventOpacity: 0.15,
  dragDropEventBorder: "2px dotted orange",
  dragDropEventBg: "purple"
};

export { regularTheme, darkTheme };
