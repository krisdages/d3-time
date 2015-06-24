import {floor as day} from "./day";
import interval from "./interval";

export function floor(date) {
  day(date);
  date.setDate(date.getDate() - date.getDay());
};

export default interval(floor, function(date, offset) {
  date.setDate(date.getDate() + Math.floor(offset) * 7);
});