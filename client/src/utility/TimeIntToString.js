/* Converts a TimeInt, a respresentation of time I thought of and I'm not too 
    sure what it's official name is. TimeInt: 10.25 is 10 and a quarter hours 
    past midnight (10.15am)
*/
export default value => {
  const remainder = value % 1;
  const postColon = remainder ? 60 * remainder : "00";
  const meridian = value > 12 ? "pm" : "am";
  if (value >= 13) {
    value -= 12;
  }
  return `${Math.floor(value)}:${postColon}${meridian}`;
};
