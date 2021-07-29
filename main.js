GuestNames = 0;
function submit(){
    GuestNames =  document.getElementById("guest1").value;
    console.log(GuestNames);
}
function show(){
    document.getElementById("s1").innerHTML=GuestNames;
}
