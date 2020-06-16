
(function(fwNamespace){

  var fwNamespace = window.calendar || (window.calendar = {});

  document.addEventListener('DOMContentLoaded', () => {
    buildCalendar(2020, 2);
  });

  function getTotalDays(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function getFirstDay(year, month) {
    return new Date(year, month-1, 1).getDay();
  }

  function buildCalendar(year, month) {
    var targetDiv = document.body.querySelector('.calendar-body-target');
    var htmlString = createCalendarHtml(year, month);
    targetDiv.insertAdjacentHTML('afterbegin', htmlString);

  }

  function createCalendarHtml(year, month) {

    var firstStartingDay = getFirstDay(year, month);
    var emptyDataArray = Array.from(Array(firstStartingDay), (_, i) => "");
    var totalDays = getTotalDays(year, month);
    var totalDaysArray = Array.from(Array(totalDays), (_, i) => (i + 1).toString());
    var calendarSquareArray = [ ...emptyDataArray, ...totalDaysArray];
    var calendarHtml = '';
    var groupArray = Array.from(Array(Math.ceil(calendarSquareArray.length/7)), (_, i) => (i + 1));
    var finalArray = [];
    console.log(Array.from(Array(5), (_, i) => i + 1));
    groupArray.forEach((value) => {
      finalArray.push(calendarSquareArray.slice(value * 7 - 6, value * 7 + 1))
    });

    finalArray.forEach((rowArray) => {
      for(var i = 0; i < rowArray.length; i++) {
        var rowValue = rowArray[i];
        if (i === 0) {
          calendarHtml += `<tr><td>${rowValue}</td>`;
        } else if (i === 6) {
          calendarHtml += `<td>${rowValue}</td></tr>`;
        } else {
          calendarHtml += `<td>${rowValue}</td>`
        }
      }
    });
    console.log(calendarHtml);
    return calendarHtml;
  }

  
})(window.wf || (window.wf = {}))