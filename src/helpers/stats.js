import data from "../data.json";
import { getWeekStart, getWeekEnd } from "./time.js";

const thousandsSeperator = (number = "0") =>
  number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

/**
 * Formats a price, e.g. 1234567.89 becomes £1,234,567.89
 */
export const formatPrice = (price, currency = "£") => {
  const numRegex = /^([+-]?)((?:\d*\.)?\d+)$/;
  const match = price.toFixed(2).match(numRegex);
  return `${match[1] ? `${match[1]} ` : ""}${currency}${thousandsSeperator(
    match[2]
  )}`;
};

/**
 * Calculates the total spent
 */
export const getTotal = () => {
  const total = data.documents
    .reduce((acc, doc) => acc + doc.fields.amount.doubleValue, 0)
    .toFixed(2);

  return formatPrice(Number(total));
};

/**
 * Calculates the biggest purchase
 */
export const getMax = () => {
  const max = data.documents
    .reduce(
      (acc, doc) =>
        doc.fields.amount.doubleValue > acc
          ? doc.fields.amount.doubleValue
          : acc,
      0
    )
    .toFixed(2);

  return formatPrice(Number(max));
};

/**
 * Calculates the smallest purchase
 */
export const getMin = () => {
  const min = data.documents
    .reduce(
      (acc, doc) =>
        doc.fields.amount.doubleValue < acc
          ? doc.fields.amount.doubleValue
          : acc,
      Infinity
    )
    .toFixed(2);

  return formatPrice(Number(min));
};

/**
 * Returns an array of locations
 */
export const getPubs = () => {
  const locations = new Set();

  data.documents.forEach((doc) => {
    locations.add(doc.fields.location.stringValue.replace("&amp;", "&"));
  });
  return [...locations];
};

/**
 * Gets the color for a pub
 */
export const getColor = (pub) => {
  if (pub === "St Georges Tavern") return "#30C5FF";
  if (pub === "The Willow Walk") return "#FFBA49";
  if (pub === "Cask Pub & Kitchen") return "#EF5B5B";
  if (pub === "Barley Mow") return "#54457F";
  if (pub === "The Jugged Hare") return "#EA7AF4";
  if (pub === "Old Thameside Inn") return "#CFBFF7";
  if (pub === "The World's End") return "#EF233C";
  if (pub === "Marquis Of Westministe") return "#D1EFB5";
  if (pub === "Battersea Brewery") return "#2A2D34";

  console.log(`${pub} is missing a color.`);

  return "#C6D8FF";
};

export const getWeekTotal = (weeksAgo) => {
  const weekStart = getWeekStart(weeksAgo);
  const weekEnd = getWeekEnd(weeksAgo);

  const total = data.documents
    .reduce((acc, doc) => {
      const purchaseDate = new Date(doc.fields.datetime.timestampValue);

      if (weekStart < purchaseDate && purchaseDate < weekEnd) {
        return acc + doc.fields.amount.doubleValue;
      }

      return acc;
    }, 0)
    .toFixed(2);

  return Number(total);
};
