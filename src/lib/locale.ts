function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function monthsForLocale(localeName = 'en-US'): string[] {
  const format = new Intl
     .DateTimeFormat(localeName, { month: 'long' }).format;

  return [...Array(12).keys()]
    .map((m) => capitalizeFirstLetter(format(new Date(Date.UTC(2021, (m+1)%12)))));
}

function weekdayForLocale(localeName = 'en-US') {
  const format = new Intl.DateTimeFormat(localeName, { weekday: 'long' }).format;
  return [...Array(7).keys()]
    .map((day) => capitalizeFirstLetter(format(new Date(Date.UTC(2021, 5, day)))));
}

function getLocale() {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
}

function fillWeekdays() {
  const weekdaysLabels = weekdayForLocale(getLocale())
  return weekdaysLabels.map(label => [label.slice(0, 2), label]);
}

export const WEEKDAYS = fillWeekdays();

function fillMonths(): [number, string][] {
  const monthsLabels = monthsForLocale(getLocale())
  return monthsLabels.map((label, index) => [index, label]);
}

export const months = new Map<number, string>(fillMonths());
