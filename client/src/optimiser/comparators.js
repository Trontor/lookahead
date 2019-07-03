export const sortByDaysPresent = (a, b) => {
  let aDays = Object.keys(a.dayHours).length;
  let bDays = Object.keys(b.dayHours).length;
  return aDays - bDays;
};

export const sortByDayAvoid = (dayIndex, a, b) => {
  let aHours = 0;
  let bHours = 0;
  if (a.dayHours[dayIndex]) {
    aHours = a.dayHours[dayIndex];
  }
  if (b.dayHours[dayIndex]) {
    bHours = b.dayHours[dayIndex];
  }
  return aHours - bHours;
};

export const sortByLongestRun = (longestRun, a, b) => {
  const aValid = a.longestRun <= longestRun;
  const bValid = b.longestRun <= longestRun;
  return aValid === bValid ? 0 : aValid ? -1 : 1;
};

export const sortByDaySpan = (a, b) => {
  return Object.keys(a.daySpans).length - Object.keys(b.daySpans).length;
};
