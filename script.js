let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityMumbaiEl = document.getElementById("cityMumbai");
let cityDelhiEl = document.getElementById("cityDelhi");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");


let capitalCity = "Delhi";
let selectedCity = null;


cityHyderabadEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});


cityChennaiEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});


cityMumbaiEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});


cityDelhiEl.addEventListener("change",function(event){
    selectedCity = event.target.value;
});


questionsFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    if(selectedCity === null){
        resultMsgEl.textContent = "Please select a city";
    }
    else if(selectedCity === capitalCity){
        resultMsgEl.textContent = "Right Answer!";
    }
    else if (selectedCity !== capitalCity){
        resultMsgEl.textContent = "Wrong Answer!"
    }
});


