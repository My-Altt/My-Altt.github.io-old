var x = setInterval(function() {
  // Set the date we're counting down to
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy; //Amarica, F**k yeah

  //time sence start of day
  var todayf = new Date();
  var today_abs = new Date();
  today_abs.setHours(0);
  today_abs.setMinutes(0);
  today_abs.setSeconds(0);
  today_secs = (todayf.getTime() - today_abs.getTime()) / 1000;

  if (today_secs > 28800 & today_secs < 30000){
    var meta = "A.M Homeroom"
    var countDownDate = new Date(today + " 08:20:00 AM").getTime();
    var fmeta = "08:20:00 AM";
  }
if (today_secs > 30000 & today_secs < 30120){
    var meta = "A.M. Homeroom to First Period"
    var countDownDate = new Date(today + " 08:22:00 AM").getTime();
    var fmeta = "08:22:00 AM";
  }
  if (today_secs > 30120 & today_secs < 33300){
    var meta = "First Period"
    var countDownDate = new Date(today + " 09:15:00 AM").getTime();
    var fmeta = "09:15:00 AM";
  }
  if (today_secs > 33300 & today_secs < 33420){
    var meta = "First to Second Period"
    var countDownDate = new Date(today + " 09:17:00 AM").getTime();
    var fmeta = "09:17:00 AM";
  }
  if (today_secs > 33420 & today_secs < 36600){
    var meta = "Second Period"
    var countDownDate = new Date(today + " 10:10:00 AM").getTime();
    var fmeta = "10:10:00 AM";
  }
  if (today_secs > 36600 & today_secs < 36720){
    var meta = "Second to Third Period"
    var countDownDate = new Date(today + " 10:12:00 AM").getTime();
    var fmeta = "10:12:00 AM";
  }
  if (today_secs > 36720 & today_secs < 39900){
    var meta = "Third Period"
    var countDownDate = new Date(today + " 11:05:00 AM").getTime();
    var fmeta = "11:05:00 AM";
  }
  if (today_secs > 39900 & today_secs < 40020){
    var meta = "Third to Fourth Period"
    var countDownDate = new Date(today + " 11:07:00 AM").getTime();
    var fmeta = "11:07:00 AM";
  }
  if (today_secs > 40020 & today_secs < 43200){
    var meta = "Fourth Period"
    var countDownDate = new Date(today + " 12:00:00 PM").getTime();
    var fmeta = "12:00:00 PM";
  }
  if (today_secs > 43200 & today_secs < 46500){
    var meta = "Fifth Period (Lunch)"
    var countDownDate = new Date(today + " 12:55:00 PM").getTime();
    var fmeta = "12:55:00 PM";
  }
  if (today_secs > 46500 & today_secs < 46620){
    var meta = "Fifth Period to Sixth Period"
    var countDownDate = new Date(today + " 12:57:00 PM").getTime();
    var fmeta = "12:57:00 PM";
  }
  if (today_secs > 46620 & today_secs < 49800){
    var meta = "Sixth Period"
    var countDownDate = new Date(today + " 01:50:00 PM").getTime();
    var fmeta = "01:50:00 PM";
  }
  if (today_secs > 49800 & today_secs < 49920){
    var meta = "Sixth Period to Seventh Period"
    var countDownDate = new Date(today + " 01:52:00 PM").getTime();
    var fmeta = "01:52:00 PM";
  }
  if (today_secs > 49920 & today_secs < 53100){
    var meta = "Seventh Period"
    var countDownDate = new Date(today + " 02:45:00 PM").getTime();
    var fmeta = "01:40:00 PM";
  }
  if (today_secs > 53100 & today_secs < 53220){
    var meta = "Seventh Period to P.M. Homeroom"
    var countDownDate = new Date(today + " 02:47:00 PM").getTime();
    var fmeta = "02:30:00 PM";
  }
  if (today_secs > 53220 & today_secs < 54000){
    var meta = "P.M. Homeroom"
    var countDownDate = new Date(today + " 03:00:00 PM").getTime();
    var fmeta = "02:30:00 PM";
  }
  if (today_secs > 54000){
    var meta = "School Has Ended"
    var countDownDate = new Date(today + " 03:00:00 PM").getTime();
    var fmeta = "";
  }

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (meta == "School Has Ended"){
    document.getElementById("meta").innerHTML = meta;
    document.getElementById("fmeta").innerHTML = "";
  }
  else if (meta == "School Has Not Started Yet") {
    document.getElementById("meta").innerHTML = meta;
    document.getElementById("fmeta").innerHTML = "School will start at 7:35:00 PM";
  } else{
    document.getElementById("meta").innerHTML = "It is " + meta;
    document.getElementById("fmeta").innerHTML = "The period ends at " + fmeta;
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "N/A";
  }
}, 1000);

//More info stuff
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//Detect Phones
//Fix Redirect patch
//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  //var url= "mobile/period.html"
  //window.location = url;
//}
