/**
 * Gets Monday of the given week
 *
 * @param {Number} weeksAgo how many weeks ago you want the start of the week
 */
export const getWeekStart = weeksAgo => {
  const date = new Date();

  const todaysDay = date.getDay(); // 0 is sunday, 1 monday, etc

  date.setDate(date.getDate() - weeksAgo * 7 - (todaysDay - 1));

  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
};

/**
 * Gets Friday of the given week
 *
 * @param {Number} weeksAgo how many weeks ago you want the end of the week
 */
export const getWeekEnd = weeksAgo => {
  const date = getWeekStart(weeksAgo);

  date.setDate(date.getDate() + 6);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  date.setMilliseconds(999);

  return date;
};
