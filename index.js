/* Navbar */
let menu = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".navbar");
menu.onclick = function(){
    menu.classList.toggle("fa-xmark");
    Navbar.classList.toggle("active");
}
window.onscroll = function(){
    menu.classList.remove("fa-xmark");
    Navbar.classList.remove("active");
}

let btn = document.querySelector(".calculate-btn");
let show = document.getElementById("result");
btn.onclick = function(){
    var d = document.getElementById("day");
    var m = document.getElementById("month");
    var y = document.getElementById("year");
    var p =document.getElementById("textPlace");
    var leap = y.valueAsNumber%4;
    /* Loas Daylength / January */
    if(p.value==="Loas" || p.value === "loas" || p.value === "ឡាវ"){
        if(m.value == 1){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength January Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * (d.value - 172)) + 727.86) + "mn";
            }else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in" + " January";
            }
        }
        /* For February  */
        else if(m.value == 2){
            if(d.value > 0 && d.value <=28 && leap !=0){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                if(d.value > 0 && d.value <=29 && leap==0){ //leap year
                    show.style.backgroundColor = "#fedaa8";
                    show.style.color="blue";
                    show.innerText = "Daylength February Of Vientiane City (Leap Year)\n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+d.value) - 173)) + 727.86) + "mn";
                }
                else{
                    show.style.color="red";
                    show.style.backgroundColor = "#fedaa8";
                    show.innerHTML = "!!!Warning Day " + d.value +" undefine in" + " February";
                }
            }
        }
        /* March  */
        else if(m.value == 3){
            if(d.value > 0 && d.value <=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength March Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "March";
            }
        }
        else if(m.value==4){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength April Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "April";
            }
        }
        else if(m.value==5){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength May Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "May";
            }
        }
        else if(m.value==6){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength June Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "June";
            }
        }
        else if(m.value==7){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength July Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "July";
            }
        }
        else if(m.value==8){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength August Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "August";
            }
        }
        else if(m.value==9){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength September Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "September";
            }
        }
        else if(m.value==10){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength October Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "October";
            }
        }
        else if(m.value==11){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength November Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+31+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "November";
            }
        }
        else if(m.value==12){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength December Of Vientiane City \n" + (64.56 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+31+30+d.value) - 172)) + 727.86) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "December";
            }
        }else{
            show.style.color="red";
            show.style.backgroundColor = "#fedaa8";
            show.innerHTML = "!!!Warning Month " + m.value +" undefine";
        }
    }

    /* ំំMondulkiri Province */
    else if(p.value==="mondulkiri" || p.value === "Mondulkiri" || p.value === "មណ្ឌលគិរី"){
        if(m.value == 1){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength January Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * (d.value - 172)) + 727.6) + "mn";
            }else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in" + " January";
            }
        }
        /* For February  */
        else if(m.value == 2){
            if(d.value > 0 && d.value <=28 && leap !=0){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                if(d.value > 0 && d.value <=29 && leap==0){ //leap year
                    show.style.backgroundColor = "#fedaa8";
                    show.style.color="blue";
                    show.innerText = "Daylength February Of Mondulkiri City (Leap Year)\n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+d.value) - 173)) + 727.6) + "mn";
                }
                else{
                    show.style.color="red";
                    show.style.backgroundColor = "#fedaa8";
                    show.innerHTML = "!!!Warning Day " + d.value +" undefine in" + " February";
                }
            }
        }
        /* March  */
        else if(m.value == 3){
            if(d.value > 0 && d.value <=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "March";
            }
        }
        else if(m.value==4){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "April";
            }
        }
        else if(m.value==5){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "May";
            }
        }
        else if(m.value==6){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "June";
            }
        }
        else if(m.value==7){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "July";
            }
        }
        else if(m.value==8){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "August";
            }
        }
        else if(m.value==9){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "September";
            }
        }
        else if(m.value==10){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "October";
            }
        }
        else if(m.value==11){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+31+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "November";
            }
        }
        else if(m.value==12){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (43.7 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+31+30+d.value) - 172)) + 727.6) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "December";
            }
        }else{
            show.style.color="red";
            show.style.backgroundColor = "#fedaa8";
            show.innerHTML = "!!!Warning Month " + m.value +" undefine";
        }
    }
    /* Takeo Province */
    else if(p.value==="takeo" || p.value === "Takeo" || p.value === "តាកែវ"){
        if(m.value == 1){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength January Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * (d.value - 172)) + 727.58) + "mn";
            }else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in" + " January";
            }
        }
        /* For February  */
        else if(m.value == 2){
            if(d.value > 0 && d.value <=28 && leap !=0){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                if(d.value > 0 && d.value <=29 && leap==0){ //leap year
                    show.style.backgroundColor = "#fedaa8";
                    show.style.color="blue";
                    show.innerText = "Daylength February Of Mondulkiri City (Leap Year)\n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+d.value) - 173)) + 727.58) + "mn";
                }
                else{
                    show.style.color="red";
                    show.style.backgroundColor = "#fedaa8";
                    show.innerHTML = "!!!Warning Day " + d.value +" undefine in" + " February";
                }
            }
        }
        /* March  */
        else if(m.value == 3){
            if(d.value > 0 && d.value <=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "March";
            }
        }
        else if(m.value==4){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "April";
            }
        }
        else if(m.value==5){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "May";
            }
        }
        else if(m.value==6){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "June";
            }
        }
        else if(m.value==7){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "July";
            }
        }
        else if(m.value==8){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "August";
            }
        }
        else if(m.value==9){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "September";
            }
        }
        else if(m.value==10){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "October";
            }
        }
        else if(m.value==11){
            if(d.value>0 && d.value<=30){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+31+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "November";
            }
        }
        else if(m.value==12){
            if(d.value>0 && d.value<=31){
                show.style.backgroundColor = "#fedaa8";
                show.style.color="blue";
                show.innerText = "Daylength February Of Mondulkiri City \n" + (38.28 * Math.cos(((2 * Math.PI) / 365) * ((31+28+31+30+31+30+31+31+30+31+30+d.value) - 172)) + 727.58) + "mn";
            }
            else{
                show.style.color="red";
                show.style.backgroundColor = "#fedaa8";
                show.innerHTML = "!!!Warning Day " + d.value +" undefine in " + "December";
            }
        }
        else{
            show.style.color="red";
            show.style.backgroundColor = "#fedaa8";
            show.innerHTML = "!!!Warning Month " + m.value +" undefine";
        }
    }
    else{
        show.style.color="red";
        show.style.backgroundColor = "#fedaa8";
        show.innerHTML = " We are available only in Takeo Mondulkiri and Loas";
    }
}