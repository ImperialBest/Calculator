// alert("Hello")

function SetTime(){
    currentDate = new Date()
    currentHour = currentDate.getHours();
    currentMinute = currentDate.getMinutes();
    currentSecond = currentDate.getSeconds();
    time = document.getElementsByClassName("time");
    hour = time[0];
    minute = time[2];
    seconds = time[4];
    time[1].style.visibility = (time[1].style.visibility == "hidden" )? "visible":"hidden";
    time[3].style.visibility = time[1].style.visibility;
    hour.innerHTML = currentHour < 10? '0'+currentHour : currentHour
    minute.innerHTML = currentMinute < 10? '0'+currentMinute : currentMinute
    seconds.innerHTML = currentSecond < 10? '0'+currentSecond : currentSecond
}
setInterval(SetTime, 500)

userInput = document.querySelector("input")
console.log(userInput.value)

function ShowValue(num){
    userInput.value+=num
}
function ShowAnswer(){
    userInput.value += '=' + eval(userInput.value)
}
button = -1
function Increm(){
    button1 = document.getElementById("but")
    button += 1
    button1.innerHTML = button
}
// Increm()
buttonIncrease = 0
function Increase (){
    buttonIncrease +=1
    get = document.getElementById("target")
    get.innerHTML = buttonIncrease
}