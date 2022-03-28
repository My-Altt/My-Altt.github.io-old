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
          if (storedLogo.indexOf("https://my-altt.github.io/duck.svg") != -1)
          {
            document.getElementById("engineLogo").src = "https://my-altt.github.io/google.svg";
            gSearch.style.display = "block";
            dSearch.style.display = "none";
          } else
          {
            document.getElementById("engineLogo").src = "https://my-altt.github.io/duck.svg";
            dSearch.style.display = "block";
            gSearch.style.display = "none";
          }
        }
    }
