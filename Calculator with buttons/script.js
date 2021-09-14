function add(){
    var fnum=Number(document.getElementById("Fnum").value);
    var Snum=Number(document.getElementById("Snum").value);
    var answer= fnum+Snum;

    document.getElementById("answer").innerHTML=answer;
}
function subtract(){
    var fnum=Number(document.getElementById("Fnum").value);
    var Snum=Number(document.getElementById("Snum").value);
    var answer= fnum-Snum;
    
    document.getElementById("answer").innerHTML=answer;
    }
function multiply(){
    var fnum=Number(document.getElementById("Fnum").value);
    var Snum=Number(document.getElementById("Snum").value);
    var answer= fnum*Snum;
        
    document.getElementById("answer").innerHTML=answer;
}
function division(){
    var fnum=Number(document.getElementById("Fnum").value);
    var Snum=Number(document.getElementById("Snum").value);
    var answer= fnum/Snum;
            
     document.getElementById("answer").innerHTML=answer;
 }

 function darkmode(){
var element = document.body;
element.classList.toggle("dark-mode")
 }