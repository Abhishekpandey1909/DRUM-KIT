var m=prompt("Name of Player1: ");
var n=prompt("Name of Player2: ");
var num = (Math.random())*6 ;
var num1= (Math.random())*6;
var num2= Math.floor(num) +1;
var num3= Math.floor(num1) +1;
var x ="images/dice" + num2 +".png";
var y ="images/dice" + num3 +".png";
document.querySelectorAll("p")[0].innerHTML = m;
document.querySelectorAll("p")[1].innerHTML = n;
document.querySelector(".img1").setAttribute("src",x);
document.querySelector(".img2").setAttribute("src",y);
if (num2>num3){
    document.querySelector(".heading").innerHTML = ("🚩" + m +" Wins");
}
else if(num3>num2){
    document.querySelector(".heading").innerHTML=(n + " Wins🚩");
}
else{
    document.querySelector(".heading").innerHTML="Draw";
}




































// if(num2==1){
//   var image = document.getElementsByClassName("img1")
//     image.src="images/dice1.png";
// }
// else if(num2==2){
//    var image= document.getElementsByClassName("img1")
//     image.src="images/dice2.png";
// }
// else if(num2==3){
//     var image=document.getElementsByClassName("img1")
//     image.src="images/dice3.png";
// }
// else if(num2==4){
//     document.getElementsByClassName("img1").src="images/dice4.png";
// }
// else if(num2==5){
//     document.getElementsByClassName("img1").src="images/dice5.png";
// }
// else if(num2==6){
//     document.getElementsByClassName("img1").src="images/dice6.png";
// }
// if(num3==1){
//     document.getElementsByClassName("img2").src="images/dice1.png";

// }


