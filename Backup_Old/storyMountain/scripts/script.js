


     function openNav(){
       document.getElementById("open").style.display = "none";
       document.getElementById("navlinks").style.width = "100%";
     }

    function closeNav() {
      document.getElementById("navlinks").style.width ="0";
      document.getElementById("open").style.display ="block";
    }


   function UpdateCoordinate() {
     var coordinate = document.getElementById("randomCoordinate");
     var max = 99999999;
     var min = -99999999;
     var long = Math.random() * (max - min) + min;
     var lat = Math.random() * (max - min) + min;
     var newCoordinate = (long/10000).toFixed(2) + "," + (lat/10000).toFixed(2);
     coordinate.innerHTML = "<p>" + newCoordinate + "</p>";
   }


setInterval(function(){ UpdateCoordinate(); }, 500);
