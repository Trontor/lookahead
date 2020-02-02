export const serializeEvents = events => JSON.stringify(events);
export const deserializeEvents = serialized => {
  return JSON.parse(serialized, dateReviver);
};

// Credit: https://www.bennadel.com/blog/3115-maintaining-javascript-date-values-during-deserialization-with-a-json-reviver.htm
const dateReviver = (key, value) => {
  if (isSerializedDate(value)) {
    return new Date(value);
  }
  return value;
};

const isSerializedDate = value => {
  // Dates are serialized in TZ format, example: '1981-12-20T04:00:14.000Z'.
  var datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  return isString(value) && datePattern.test(value);
};

const isString = value => typeof value === "string";
