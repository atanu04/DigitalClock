const hourel = document.getElementById('hours');
const minel = document.getElementById('mins');
const secel = document.getElementById('sec');

function setDate() {
  const d = new Date();
  hourel.innerText = format(d.getHours());
  minel.innerText = format(d.getMinutes());
  secel.innerText = format(d.getSeconds());
}
function format(time) {
  if(time<10){
    return "0"+time;
  }
  else{
    return time
  }
}

//setDate();
setInterval(setDate,1000);
