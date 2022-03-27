function toggleEngine() {

  var dSearch = document.getElementById("dSearch");
  var gSearch = document.getElementById("gSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("google.svg") != -1) {
    document.getElementById("engineLogo").src = "file:///home/chronos/u-d03a57836de87b68f8474f4d04aef7972beef003/MyFiles/other/duck.svg";
    gSearch.style.display = "none";
    dSearch.style.display = "block";
  } else {
    document.getElementById("engineLogo").src = "file:///home/chronos/u-d03a57836de87b68f8474f4d04aef7972beef003/MyFiles/other/google.svg";
    dSearch.style.display = "none";
    gSearch.style.display = "block";
  }

  document.getElementById("textField").reset();
}