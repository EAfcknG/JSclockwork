let userName = prompt("Kullanıcı Adınızı Giriniz")
let myName = document.querySelector("#myName")

if (userName) {
    myName.innerHTML = `${userName} `
} else {
        alert("Lütfen Kullanıcı Adınızı Giriniz. Boş Bırakılamaz.")
        location.reload();
    }




const days = ["Pazar" , "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
function showTime() {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    document.querySelector("#Clockwork").innerHTML = `${hour}: ${minute}: ${second}  ${day}` 
 }
 
 setTimeout(showTime, 1000);
 
 console.log(showTime)


