import moment from 'moment';

export const FIRST_YEAR = {
  name: 'First Year',
  time: '2019-07-16 10:00',
};
export const SECOND_YEAR = {
  name: 'Second Year',
  time: '2019-07-11 10:00',
};
export const THIRD_YEAR = {
  name: 'Third Year',
  time: '2019-07-09 10:00',
};
export const GRAD_HONOURS = {
  name: 'Graduate and Honours',
  time: '2019-07-02 10:00',
};
export const TWO_DAYS = {
  name: 'Soon',
  time: moment().add(2, 'days').add('3', 'hours').add('59', 'minutes').toISOString(),
};
export const VERY_SOON = {
  name: 'Pretty Soon',
  time: moment().add('59', 'minutes').toISOString(),
};
export const PANIC = {
  name: 'Very Soon',
  time: moment().add('35', 'seconds').toISOString(),
};

const allOpenings = [TWO_DAYS, SECOND_YEAR, VERY_SOON, PANIC, GRAD_HONOURS, FIRST_YEAR, THIRD_YEAR];

allOpenings.forEach(opening => {
  opening.time = new moment(opening.time);
});

// Sort by impending openings and then by closest opening
allOpenings.sort((a, b) => {
  const now = new moment();
  const aBefore = a.time.isBefore(now);
  const bBefore = b.time.isBefore(now);
  return aBefore && bBefore ? b.time - a.time : aBefore ? 1 : -1;
});

export default allOpenings;
