
function klikk(){
    var pont=0;
if(document.getElementById("gomb2").checked==true){
    pont+=1;
}
if(document.getElementById("tavak").value=="igaz"){
    pont+=1;
}
if(document.getElementById("plazak").value=="igaz"){
    pont+=1;
}
if(document.getElementById("allatok").value=="igaz"){
    pont+=1;
}
if(document.getElementById("iskola").value=="szixi"){
    pont+=1;
}
document.getElementById("valaszok").innerHTML="Eredmény: "+pont;
}