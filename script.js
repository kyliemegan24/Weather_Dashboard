var storageArray = [];

function onPageLoad() {

    var cityName = $("#citySearch").val().trim();

    console.log(cityName);

    var showBtn = JSON.parse(localStorage.getItem('history'));

    var ul = $("#list");

    ul.empty();

    console.log(showBtn);

    for (var i = 0; i < storageArray.length; i++) {
        
        var ul = $("#list");

        var li = $("<li>");

        var btn = $("<button class='saved'>").text(showBtn[i]);

        li.append(btn);

        ul.prepend(li);

        $(this).attr('data-city', cityName)

    }

    
}

function displayCityInfo(city) {
    console.log(city)

    var cityName = $("#citySearch").val().trim()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div id='city'>");
        cityDiv.empty();

        var city = response.name;

        var pOne = $("<p>").text(city);

        cityDiv.append(pOne);

        var date = new Date(); 
        var hate = date.getDate();
        var late = date.getUTCMonth() + 1;
        var datey = $("<p>").text(late + "/" + hate);
        cityDiv.append(datey);

        var temp = (response.main.temp - 273.15) * 1.80 + 32;
        var tempy = Math.floor(temp);

        var pTwo = $("<p>").text("Temperature: " + tempy + "F");

        cityDiv.append(pTwo);

        var iconCode = response.weather[0].icon;

        var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        var image = $("<img>").attr("src", iconURL);

        cityDiv.append(image);

        var humidity = response.main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        var windSpeed = response.wind.speed;

        var pFour = $("<p>").text("Wind Speed: " + windSpeed + "mph");

        cityDiv.append(pFour);

        var lattitude = response.coord.lat;

        var longitude = response.coord.lon;
        console.log(lattitude);
        console.log(longitude);

        var UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lattitude + "&lon=" + longitude + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

        $.ajax({
            url: UVQueryURL,
            method: "GET"
        }).then(function(response) {

            var UVIndex = response.value;
            console.log(UVIndex);

            var pFive = $("<p id='uvp'>").text("UV Index: " + UVIndex);

            cityDiv.append(pFive);

            if (UVIndex > 6) {
                $("#uvp").addClass('high');
            } 
            else if (UVIndex < 6 || UVIndex > 2) {
                $("#uvp").addClass('med');
            }
            
            else (UVIndex < 2) ;{

                $("#uvp").addClass('low');
            }
            
            
        });
        

        $("#weatherView").append(cityDiv);
    
    })

}

function displayForecastDayOne(city) {
    
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var date = response.list[4].dt_txt;

        var pDate = $("<p>").text(date);

        cityDiv.append(pDate);

        var temp = (response.list[4].main.temp - 273.15) * 1.80 + 32;
        var tempy = Math.floor(temp);

        var pTwo = $("<p>").text("Temperature: " + tempy + "F");

        cityDiv.append(pTwo);

        var iconCode = response.list[4].weather[0].icon;

        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        var image = $("<img>").attr("src", iconUrl)

        cityDiv.append(image);

        var humidity = response.list[4].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast1").append(cityDiv);

        
    })
}

function displayForecastDayTwo(city) {
    
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var date = response.list[12].dt_txt;

        var pDate = $("<p>").text(date);

        cityDiv.append(pDate);

        var temp = (response.list[12].main.temp - 273.15) * 1.80 + 32;
        var tempy = Math.floor(temp);

        var pTwo = $("<p>").text("Temperature: " + tempy + "F");

        cityDiv.append(pTwo);

        var iconCode = response.list[12].weather[0].icon;

        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        var image = $("<img>").attr("src", iconUrl)

        cityDiv.append(image);

        var humidity = response.list[12].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast2").append(cityDiv);

        
    })
}

function displayForecastDayThree(city) {
    
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var date = response.list[20].dt_txt;

        var pDate = $("<p>").text(date);

        cityDiv.append(pDate);

        var temp = (response.list[20].main.temp - 273.15) * 1.80 + 32;
        var tempy = Math.floor(temp);

        var pTwo = $("<p>").text("Temperature: " + tempy + "F");

        cityDiv.append(pTwo);

        var iconCode = response.list[20].weather[0].icon;

        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        var image = $("<img>").attr("src", iconUrl)

        cityDiv.append(image);

        var humidity = response.list[20].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast3").append(cityDiv);

        
    })
}

function displayForecastDayFour(city) {
    
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var date = response.list[28].dt_txt;

        var pDate = $("<p>").text(date);

        cityDiv.append(pDate);

        var temp = (response.list[28].main.temp - 273.15) * 1.80 + 32;
        var tempy = Math.floor(temp);

        var pTwo = $("<p>").text("Temperature: " + tempy + "F");

        cityDiv.append(pTwo);

        var iconCode = response.list[28].weather[0].icon;

        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        var image = $("<img>").attr("src", iconUrl)

        cityDiv.append(image);

        var humidity = response.list[28].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast4").append(cityDiv);

        
    })
}

function displayForecastDayFive(city) {
   
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var date = response.list[36].dt_txt;

        var pDate = $("<p>").text(date);

        cityDiv.append(pDate);

        var temp = (response.list[36].main.temp - 273.15) * 1.80 + 32;
        var tempy = Math.floor(temp);

        var pTwo = $("<p>").text("Temperature: " + tempy + "F");

        cityDiv.append(pTwo);

        var iconCode = response.list[36].weather[0].icon;

        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        var image = $("<img>").attr("src", iconUrl)

        cityDiv.append(image);

        var humidity = response.list[36].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast5").append(cityDiv);

        
    })
}

function saveHistory() {

    var cityName = $("#citySearch").val().trim();

    storageArray.push(cityName);

    localStorage.setItem('history', JSON.stringify(storageArray));    
    
}

$(document).on("click", ".saved", function(event) {
    event.preventDefault();

    var savedCity = $(this).text();

    $("#weatherView").empty();
    $("#forecast1").empty();
    $("#forecast2").empty();
    $("#forecast3").empty();
    $("#forecast4").empty();
    $("#forecast5").empty();

    displayCityInfo(savedCity);
    displayForecastDayOne(savedCity);
    displayForecastDayTwo(savedCity);
    displayForecastDayThree(savedCity);
    displayForecastDayFour(savedCity);
    displayForecastDayFive(savedCity);
    console.log($(this).text());
});


$(".searchBtn").on("click", function(event) {
    event.preventDefault();

    var currentCity = $("#citySearch").val();

    $("#weatherView").empty();
    $("#forecast1").empty();
    $("#forecast2").empty();
    $("#forecast3").empty();
    $("#forecast4").empty();
    $("#forecast5").empty();

    displayCityInfo(currentCity);
    displayForecastDayOne(currentCity);
    displayForecastDayTwo(currentCity);
    displayForecastDayThree(currentCity);
    displayForecastDayFour(currentCity);
    displayForecastDayFive(currentCity);
    saveHistory();
    onPageLoad();


    $("#citySearch").val('');
});

function getStoredInputs() {
    var pastSearches = JSON.parse(localStorage.getItem("history"))
    $("#list").text(pastSearches)
    
}

getStoredInputs();
