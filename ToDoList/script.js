var addclose= document.getElementsByTagName("LI");
for(var i=0;i<addclose.length;i++){
    var span= document.createElement("SPAN");
    var del= document.createTextNode("DELETE");
    span.className="close";
    span.appendChild(del);
    addclose[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick= function(){
        var div=this.parentElement.style.display = 'none';
    }
}
var list= document.getElementById("listUL");
list.addEventListener("click",function(event){
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked')
    }
},false);

function addElement(){
    var list=document.createElement("li");
    var value= document.getElementById("todolist").value;
    var newText=document.createTextNode(value);
    list.appendChild(newText);
    if(value==='')
       return false;
    else
    {document.getElementById("listUL").appendChild(list);}

    document.getElementById("todolist").value = "";

    var span = document.createElement("SPAN");
    var del = document.createTextNode("DELETE");
    span.className = "close";
    span.appendChild(del);
    list.appendChild(span);

    for(var i=0;i<close.length;i++){
    close[i].onclick= function(){
        var div=this.parentElement.style.display = 'none';
        }
    }
}