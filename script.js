city=document.querySelector("#locationinp");
submitbutton=document.getElementById("submitbutton");
temperature=document.querySelector(".temperature");

submitbutton.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=ca9c343e4745935563f2677e45d079f4`)
    .then(response => response.json())
    .then(result => display(result))
    .catch(err => alert('City does not exist')); 

})

function display(result){
    temperature.innerText=result.main.temp+" °C";
    document.querySelector("#locationinp").value=result.name;
}