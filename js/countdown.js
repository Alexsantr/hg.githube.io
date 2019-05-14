function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var Years = Math.floor((t / 1000 / 60) % 60);
	var Month = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
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
		MonthSpan.innerHTML = ('0' + t.Month).slice(-2);
		YearsSpan.innerHTML = ('0' + t.Years).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 10);
}

var deadline1 = new Date(Date.parse(new Date()) + 230 * 24 * 60 * 60 * 1000);
var deadline2 = new Date(Date.parse(new Date()) + 390 * 24 * 60 * 60 * 1000);
var deadline3 = new Date(Date.parse(new Date()) + 570 * 24 * 60 * 60 * 1000);
var deadline4 = new Date(Date.parse(new Date()) + 400 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv1', deadline1);
initializeClock('clockdiv2', deadline2);
initializeClock('clockdiv3', deadline3);
initializeClock('clockdiv4', deadline4);
