import moment from "moment";

export const FIRST_YEAR = {
  name: "First Year",
  time: "2019-07-02 10:00"
};
export const SECOND_YEAR = {
  name: "Second Year",
  time: "2019-07-09 10:00"
};
export const THIRD_YEAR = {
  name: "Third Year",
  time: "2019-07-09 10:00"
};
export const GRAD_HONOURS = {
  name: "Graduate and Honours",
  time: "2019-07-02 10:00"
};
export const TWO_DAYS = {
  name: "Soon",
  time: moment()
    .add(2, "days")
    .add("3", "hours")
    .add("59", "minutes")
    .toISOString()
};
export const VERY_SOON = {
  name: "Pretty Soon",
  time: moment()
    .add("59", "minutes")
    .toISOString()
};
export const PANIC = {
  name: "Very Soon",
  time: moment()
    .add("35", "seconds")
    .toISOString()
};

const allOpenings = [
  TWO_DAYS,
  VERY_SOON,
  PANIC,
  FIRST_YEAR,
  SECOND_YEAR,
  THIRD_YEAR,
  GRAD_HONOURS
];

allOpenings.forEach(opening => {
  opening.time = new moment(opening.time);
});

// Sort by impending openings and then by closest opening
allOpenings.sort((a, b) => (a.time.isBefore(moment()) ? 1 : a.time - b.time));

export default allOpenings;
