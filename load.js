window.onload = function()
    {
        var gSearch = document.getElementById("gSearch");
        var dSearch = document.getElementById("dSearch");

        let storedLogo = localStorage.getItem('preferredEngine');
        let currentLogo;

        if (!storedLogo)
        {
          currentLogo = document.getElementById("engineLogo").src;
          localStorage.setItem('preferredEngine', currentLogo);
        } else
        {
          if (storedLogo.indexOf("file:///home/chronos/u-d03a57836de87b68f8474f4d04aef7972beef003/MyFiles/other/duck.svg") != -1)
          {
            document.getElementById("engineLogo").src = "file:///home/chronos/u-d03a57836de87b68f8474f4d04aef7972beef003/MyFiles/other/google.svg";
            gSearch.style.display = "block";
            dSearch.style.display = "none";
          } else
          {
            document.getElementById("engineLogo").src = "file:///home/chronos/u-d03a57836de87b68f8474f4d04aef7972beef003/MyFiles/other/duck.svg";
            dSearch.style.display = "block";
            gSearch.style.display = "none";
          }
        }
    }