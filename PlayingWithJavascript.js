var todaysdate = new Date();

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
document.getElementById("today").innerHTML = todaysdate.toDateString();
document.getElementById('tomorrowsdate').innerHTML = days[todaysdate.getDay()] + " " + months[todaysdate.getMonth()]
		+ " " + (todaysdate.getDate() + 1) + " " + todaysdate.getFullYear();
function changeText()
{
	document.getElementById("changeme").innerHTML = "Told you so!";
}
