import React from 'react';

function predictHeader() {
  // Get the current date
  const currentDate = new Date();

  // Get the current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the next month by adding 1 to the current month
  // If the current month is December (month 11), reset the month to January (month 0) and increment the year
  let nextMonth = currentMonth + 1;
  let nextYear = currentYear;
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear += 1;
  }

  // Get the name of the next month
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const nextMonthName = monthNames[nextMonth];

  // Return the header with the next month and year
  return (
     <h4 >Interest Rate Prediction for {nextMonthName} {nextYear}</h4>
     );
}

export default predictHeader;
