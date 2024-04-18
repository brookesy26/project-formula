//takes in a date argument, using date object and argument to get and formates the date (date: 12 for example)
export function handleDate(date) {
  const sessionDate = new Date(date).getDate();
  return new String(sessionDate).padStart(2, "0");
}

//takes in a date argument, using date object and argument to get and formates time into minutes and hours
export function handleTime(date) {
  let hours = new Date(date).getHours()
  let mins = new Date(date).getMinutes();
  let strHours = new String(hours).padStart(2, "0");
  let strMins = new String(mins).padStart(2, "0");
  return `${strHours}:${strMins}`
}


//takes in two date arguments, using the date object and arguments to get and formate the date from / to
//checks if the months overlap if so it will return both months text, else returns just the 1 month
//example return 31 - 2 Mar/Apr   else   12 - 15 Apr

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

