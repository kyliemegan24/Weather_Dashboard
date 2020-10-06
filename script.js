var cities = [""];

function displayCityInfo() {

    var cityName = $("#citySearch").val().trim()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div id='city'>");

        var city = response.name;

        var pOne = $("<p>").text("City: " + city);

        cityDiv.append(pOne);

        var temp = (response.main.temp - 273.15) * 1.80 + 32;

        var pTwo = $("<p>").text("Temperature " + temp + " degrees Farenheit");

        cityDiv.append(pTwo);

        var icon = response.weather[0].icon;

        var image = $("<img>").attr("src", icon);

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

            var pFive = $("<p>").text("UV Index: " + UVIndex);

            cityDiv.append(pFive);
        })

        $("#weatherView").append(cityDiv);
    })

}

function displayForecastDayOne() {
    var cityNameF = $("#citySearch").val().trim();
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameF + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var temp = (response.list[4].main.temp - 273.15) * 1.80 + 32;

        var pTwo = $("<p>").text("Temperature " + temp + " degrees Farenheit");

        cityDiv.append(pTwo);

        var icon = response.list[4].weather[0].icon;

        var image = $("<img>").attr("src", icon)

        cityDiv.append(image);

        var humidity = response.list[4].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast1").append(cityDiv);

        
    })
}

function displayForecastDayTwo() {
    var cityNameF = $("#citySearch").val().trim();
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameF + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var temp = (response.list[12].main.temp - 273.15) * 1.80 + 32;

        var pTwo = $("<p>").text("Temperature " + temp + " degrees Farenheit");

        cityDiv.append(pTwo);

        var icon = response.list[12].weather[0].icon;

        var image = $("<img>").attr("src", icon)

        cityDiv.append(image);

        var humidity = response.list[12].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast2").append(cityDiv);

        
    })
}

function displayForecastDayThree() {
    var cityNameF = $("#citySearch").val().trim();
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameF + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var temp = (response.list[20].main.temp - 273.15) * 1.80 + 32;

        var pTwo = $("<p>").text("Temperature " + temp + " degrees Farenheit");

        cityDiv.append(pTwo);

        var icon = response.list[20].weather[0].icon;

        var image = $("<img>").attr("src", icon)

        cityDiv.append(image);

        var humidity = response.list[20].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast3").append(cityDiv);

        
    })
}

function displayForecastDayFour() {
    var cityNameF = $("#citySearch").val().trim();
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameF + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var temp = (response.list[28].main.temp - 273.15) * 1.80 + 32;

        var pTwo = $("<p>").text("Temperature " + temp + " degrees Farenheit");

        cityDiv.append(pTwo);

        var icon = response.list[28].weather[0].icon;

        var image = $("<img>").attr("src", icon)

        cityDiv.append(image);

        var humidity = response.list[28].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast4").append(cityDiv);

        
    })
}

function displayForecastDayFive() {
    var cityNameF = $("#citySearch").val().trim();
    var queryURLF =  "https://api.openweathermap.org/data/2.5/forecast?q=" + cityNameF + "&APPID=72e0c923e53d160e5213a8ed3091e1f4";

    $.ajax({
        url: queryURLF,
        method: "GET"
    }).then(function(response) {

        var cityDiv = $("<div class='city'>");

        var temp = (response.list[36].main.temp - 273.15) * 1.80 + 32;

        var pTwo = $("<p>").text("Temperature " + temp + " degrees Farenheit");

        cityDiv.append(pTwo);

        var icon = response.list[36].weather[0].icon;

        var image = $("<img>").attr("src", icon)

        cityDiv.append(image);

        var humidity = response.list[36].main.humidity;

        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        cityDiv.append(pThree);

        $("#forecast5").append(cityDiv);

        
    })
}

function saveHistory() {

    var cityName = $("#citySearch").val().trim();

    var ul = $("#list");

    var li = $("<li>");

    var btn = $("<btn class='saved'>").text(cityName);

    li.append(btn);

    ul.prepend(li);

    // localStorage.setItem('history', JSON.stringify(ul));
    // localStorage.getItem('history');
    
    $(".saved").on("click", function(event) {
        event.preventDefault();
    
        $("#weatherView").empty();
        $("#forecast").empty();
    
        displayCityInfo();
        displayForecastDayOne();
        displayForecastDayTwo();
        displayForecastDayThree();
        displayForecastDayFour();
        displayForecastDayFive();
    });

}

$(".searchBtn").on("click", function(event) {
    event.preventDefault();

    $("#weatherView").empty();
    $("#forecast").empty();

    displayCityInfo();
    displayForecastDayOne();
    displayForecastDayTwo();
    displayForecastDayThree();
    displayForecastDayFour();
    displayForecastDayFive();
    saveHistory();

})
