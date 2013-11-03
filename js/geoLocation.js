var x=document.getElementById('geo');
var lat;
var longi;


function getLocation()
  {
    if (Modernizr.geolocation)
      {
        navigator.geolocation.getCurrentPosition(showPosition, error_handler);
      }
    else{
      x.innerHTML="Please enable location to use this application";
    }
  }

function showPosition(position)
  {
     var mapOptions = {
     zoom: 15,
     center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   var map = new google.maps.Map(document.getElementById("geo"), mapOptions);
   var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: 'Hello World!'})
   
 }

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key={YOUR GOOGLE API KEY GOES HERE}&sensor=true&callback=getLocation";
  document.body.appendChild(script);
}
function error_handler(err) {
    if (err.code == 1) {
       alert('error 1');
    }

    if (err.code == 2) {
       alert('error 2');
    }

    if (err.code == 0) {
       alert('error 3');
    }
}

window.onload = function(){       
  loadScript();
                           
}

