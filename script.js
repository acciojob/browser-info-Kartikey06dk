function displayBrowserInfo() {
      var browserInfoDiv = document.getElementById("browser-info");
      
      // Detect the user's browser name
      var browserName = "";
      if (navigator.userAgent.indexOf("Chrome") != -1)
        browserName = "Google Chrome";
      else if (navigator.userAgent.indexOf("Firefox") != -1)
        browserName = "Mozilla Firefox";
      else if (navigator.userAgent.indexOf("Safari") != -1)
        browserName = "Apple Safari";
      else if (navigator.userAgent.indexOf("Opera") != -1)
        browserName = "Opera";
      else if (navigator.userAgent.indexOf("Edge") != -1)
        browserName = "Microsoft Edge";
      else if (navigator.userAgent.indexOf("Trident") != -1)
        browserName = "Internet Explorer";
      else
        browserName = "Unknown";
      
      // Get the browser version
      var version = parseFloat(navigator.appVersion);
      
      // Display the browser information
      var infoMessage = "You are using " + browserName + " version " + version;
      browserInfoDiv.textContent = infoMessage;
    }