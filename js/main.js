var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

// The images and text changes depending on what time it is.
var updateClock = function() 
{

    var timeOfDayText = document.getElementById("timeEvent");
    var lolcatImage = document.getElementById('lolcatImage');
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";


    if (time == partyTime){
	  messageText = "IZ PARTEE TIME!!";
	  image = "https://www.bellrockgrowers.com/wp-content/uploads/2016/02/cat-party.jpg";
    }   else if (time == napTime) {
	  messageText = "IZ NAP TIME...";
	  image = "https://i.redd.it/m9agulgygx331.jpg";
    }   else if (time == lunchTime) {
	  messageText = "IZ NOM NOM NOM TIME!!";
	  image = "https://66.media.tumblr.com/c87f278c879cdfdd3fb6741f548b4768/tumblr_inline_p5dm1pdsDH1t7947e_540.jpg";
    }   else if (time == wakeupTime) {
	  messageText = "IZ TIME TO GETTUP.";
	  image = "https://www.iizcat.com/uploads/2016/02/99d4t-lp1.jpg";
    }   else if (time < noon) {
      messageText = "Good Morning! You are CATsome!";
	  image = "https://i.redd.it/tfi7qlekduo31.jpg";
    }   else if (time > evening) {
      messageText = "Good Evening Hooman!";
	  image = "https://i.pinimg.com/originals/8f/35/96/8f3596b39ed36dd4eba1a7c51fe21189.jpg";
    }   else {
      messageText = "Good afternoon Hooman!";
	  image = "https://i.pinimg.com/originals/ef/85/e5/ef85e55356c5ba89b5dc2bb234367fdf.jpg";
    }
 
    timeOfDayText.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();

};

var showCurrentTime = function()
{
    // displays the string with the time on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Sets hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Sets Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Sets Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // Puts together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
	
updateClock(); 
var oneSecond = 1000; 
setInterval(updateClock, oneSecond);

//Set time selectors
var partyTimeButton = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

// The text and color of the party button and the image with text are changing when you click the btn.
var partyEvent = function() {
   
    if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	   
	  partyTimeButton.innerText = "Party Time";
	  partyTimeButton.style.backgroundColor = "#bc658d";
      
    }
    else {
      isPartyTime = false;
      time = new Date().getHours();
	   
	   partyTimeButton.innerText = "Party Over!";
	   partyTimeButton.style.backgroundColor = "#222";
      
    }
};

// You can set the Time selectors, and with that the Lol Cat image and text 
// changes if the value are matching the current time.
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
 
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
 
var napEvent = function() {
    napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);