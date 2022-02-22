function klikk(){
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
document.getElementById("valaszok").innerHTML=pont;
}