export function handleDate(date) {
  const sessionDate = new Date(date).getDate();
  return new String(sessionDate).padStart(2, "0");
}

export function handleTime(date) {
  let hours = new Date(date).getHours()
  let mins = new Date(date).getMinutes();
  let strHours = new String(hours).padStart(2, "0");
  let strMins = new String(mins).padStart(2, 0);
  return `${strHours}:${strMins}`
}

export function dateFromTo(from, to) {
  const date1 = new Date(from).getDate();
  const strDate1 = new String(date1).padStart(2, "0");

  const date2 = new Date(to).getDate();
  const strDate2 = new String(date2).padStart(2, "0");

  const firstMonth = new Date(from).getMonth();
  const secondMonth = new Date(to).getMonth();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (firstMonth !== secondMonth) return `${strDate1}-${strDate2} ${month[firstMonth]}/${month[secondMonth]}`
  else return `${strDate1}-${strDate2} ${month[firstMonth]}`;
}

