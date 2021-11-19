const message =
  "Votre demande de Newsletter a bien été prise en compte. Merci beaucoup!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


// test horloge

function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM' ;
    }else{
        session.innerHTML = 'AM' ;
    }
    if(hrs > 12){
        hrs = hrs - 12
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10)