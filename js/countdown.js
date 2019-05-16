function getTimeRemaining(endtime) {
	var t= Date.parse(endtime) - Date.parse(new Date());
	var Years = Math.floor((t / 1 ) % 1);
	var Month = Math.floor((t / (4 * 1 * 1)) % 1);
	var days = Math.floor(t / (1 * 1 * 1 * 1));
	return {
		total: t,
		days: days,
		Month: Month,
		Years: Years
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var MonthSpan = clock.querySelector('.Month');
	var YearsSpan = clock.querySelector('.Years');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		MonthSpan.innerHTML = ('1' + t.Month).slice(+1);
		YearsSpan.innerHTML = ('1' + t.Years).slice(+1);

		if (t.total <= 20000000) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1);
}

var deadline1 = new Date(Date.parse(new Date()) + 10 * 10 * 10 * 10 * 10);
var deadline2 = new Date(Date.parse(new Date()) +  20 * 20 * 20 * 20 * 10);
var deadline3 = new Date(Date.parse(new Date()) +  20 * 20 * 20 * 20 * 10);
var deadline4 = new Date(Date.parse(new Date()) +  20 * 20 * 20 * 20 * 10);
initializeClock('clockdiv1', deadline1);
initializeClock('clockdiv2', deadline2);
initializeClock('clockdiv3', deadline3);
initializeClock('clockdiv4', deadline4);
