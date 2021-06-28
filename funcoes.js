const legendasDan = [
    "Primeiro evento internacional",
    "Primeiro rolê em SP",
    "Foto de formatura"
]

const legendasLucas = [
    "Se protegendo do coronavirus",
    "Joguinho com os parças",
    "Foto com a cachorrinha"
]

const imagesDan = [
    "https://cdn.discordapp.com/attachments/691003296231587911/841688794327810048/8f20e452-15a7-47e0-aa84-4f2659878ca9.png",
    "https://cdn.discordapp.com/attachments/691003296231587911/841688824832589844/3038b3e7-5122-4134-8b99-1259ae5f3ca1.png",
    "https://cdn.discordapp.com/attachments/691003296231587911/841688858068123648/c8b2667a-206b-44ac-ab10-688c2e0d360c.png"
]

const imagesLucas = [
    "https://media.discordapp.net/attachments/691003296231587911/841716042958635029/IMG-20210104-WA0003.jpeg?width=266&height=473",
    "https://media.discordapp.net/attachments/691003296231587911/841716043335860284/IMG-20190106-WA0028.jpg?width=355&height=473",
    "https://media.discordapp.net/attachments/691003296231587911/841716154832912414/IMG_20210422_133729880.jpg?width=355&height=473",
]


var current = 0;

function mod(n, m){
    return ((n%m)+m)%m;
}

function movePreviousDan(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current - 1, legendasDan.length);
    frame.style.backgroundImage="url('"+imagesDan[current]+"')";
    description.innerHTML = legendasDan[current];
}

function moveNextDan(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current + 1, legendasDan.length);
    frame.style.backgroundImage="url('"+imagesDan[current]+"')";
    description.innerHTML = legendasDan[current];
}

function movePreviousLucas(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current - 1, legendasLucas.length);
    frame.style.backgroundImage="url('"+imagesLucas[current]+"')";
    description.innerHTML = legendasLucas[current];
}

function moveNextLucas(){
    const frame = document.getElementById("frame");
    const description = document.getElementById("description");
    current = mod(current + 1, legendasLucas.length);
    frame.style.backgroundImage="url('"+imagesLucas[current]+"')";
    description.innerHTML = legendasLucas[current];
}

var classCurrent=0;
function currentClass(){
    if (classCurrent ==0){
        addClass();
        classCurrent =1;
    } else{
        removeClass();
        classCurrent =0;
    }
}
function addClass(){
    const array = document.getElementsByClassName("frame");
    for (var i = 0; i < array.length; i++){
        array[i].classList.add("class2");
    }
}

function removeClass(){
    const array = document.getElementsByClassName("frame");
    for (var i = 0; i < array.length; i++){
        array[i].classList.remove("class2");
    }
}