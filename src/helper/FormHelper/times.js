import {
  format,
  addDays,
  addMonths,
  addWeeks,
} from 'date-fns';

// 일별 기준 날짜 배열 만들기
export function makeDateArray(prev, now) {
  const dateArray = [];
  let current = prev;
  while (current <= now) {
    dateArray.push(format(current, 'MM-dd'));
    current = addDays(current, 1);
  }
  return dateArray;
}
// 주별 기준 날짜 배열 만들기
export function makeWeekArray(prev, now) {
  const dateArray = [];
  let current = prev;
  while (current <= now) {
    dateArray.push(format(current, 'yy-MM-dd'));
    current = addWeeks(current, 1);
  }
  return dateArray;
}
// 월별 기준 날짜 배열 만들기
export function makeMonthArray(prev, now) {
  const dateArray = [];
  let current = prev;
  while (current <= now) {
    dateArray.push(format(current, 'yyyy-MM'));
    current = addMonths(current, 1);
  }
  return dateArray;
}
