realValue = ""
show = document.getElementsByClassName("screen");
function New(but, button = but) {
  if(clear == true){
    realValue = ""
    show[0].value =""
  }
  show[0].value += but;
  realValue += button
  clear = false
}
clear = false
answer =""
function Math1(){
  clear = true
  answer =  eval(realValue)
  adder = show[0].value += ' = ' + answer
}
function Answer(){
  New('Ans',answer)  
}
function DelKey(){
  lengthOfInput = show[0].value.length
  show[0].value = show[0].value.substring(0, lengthOfInput-1)
  realValue = show[0].value.substring(0, lengthOfInput-1)
  // console.log(lengthOfInput)
}
function ClearAll(){
  show[0].value = ""
  realValue = ""
  clear = true
}
theVisibility = "hidden"
function Time(){
  instanceDate = new Date();
  hours = instanceDate.getHours();
  minutes = instanceDate.getMinutes();
  seconds = instanceDate.getSeconds();
  timeChange = document.getElementsByClassName("time");
  timeChange[0].innerHTML = hours;
  timeChange[1].innerHTML = ':';
  timeChange[2].innerHTML = minutes;
  timeChange[3].innerHTML = ':';
  timeChange[4].innerHTML = seconds;
    if (theVisibility == "hidden"){
      theVisibility = "visible"
    }
    else {
      theVisibility = "hidden"
    }
    timeChange[1].style.visibility = theVisibility
    timeChange[3].style.visibility = theVisibility
}


  // Time();
  setInterval(Time,500)










// function Exponential(){
//   expo = '^' + show[0].value + ' = ' + show[0].value ** show[0].value
//   show[0].value += expo
// }
// function sqr (){
//   expo = + = ' + Math.pow(show[0].value,show[0].value)
//   show[0].value += expo
// }