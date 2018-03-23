hour = document.getElementById("hour");
minute = document.getElementById('minute');
second = document.getElementById('second');
setInterval(update, 500);
function update(){
    var ct = new Date();
    s = ct.getSeconds();
    m = ct.getMinutes();
    h = ct.getHours();
    if(s<10){
        s = 0 + s;
    }
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}