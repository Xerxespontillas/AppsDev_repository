var decide= parseInt(prompt("Enter Number "+"\n"+"1:Add"+"\n"+"2:Subtract"+"\n"+" 3:Multiply"+ "\n"+"4:Divide"));

var x= prompt("First Number");
var y= prompt("Second Number");

switch(decide){
 
    case 1: alert(addition(x,y)); 
    break;
    case 2: alert(subtraction(x,y)); 
    break;
    case 3: alert(multiply(x,y)); 
    break;
    case 4: alert(divide(x,y)); 
    break;
default: alert("Invalid");
}
function addition(a,b){
    return parseInt(a)+parseInt(b);
}
function subtraction(a,b){
    return  parseInt(a)-parseInt(b);
}
function multiply(a,b){
    return parseInt(a)*parseInt(b);
}
function divide(a,b){
    return parseInt(a)/parseInt(b);
}
