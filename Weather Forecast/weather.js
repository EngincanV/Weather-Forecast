$(document).ready(function() {
    $('#submitWeather').click(function() {

        //variables
        let city = $("#city").val();
        let city2 = $("#city2");
        let celsius = $("#celsius");
        let cases = $("#cases");
        let date = new Date();

        $("#div1").css("border","2px solid black");

        if(city != "") {
            $.ajax({
                //for celsius i used metric system of temperature
                url: 'http://api.openweathermap.org/data/2.5/find?q=' + city + "&units=metric" + "&appid=e0523e190398e4bc66293fbf167feaff", 
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    try {
                        $("#show").show();
                        console.log(data);
                        city2.html("<h3>Weather in " + city.toUpperCase() + "<p>")
                        celsius.html('<h4>' + data.list[0].main["temp"] + " °C<p></h4>");
                        cases.html('<h4> Case: ' + data.list[0].weather[0].main + "</h4> Temperature Min: " + data.list[0].main.temp_min + " / Temperature Max: " + data.list[0].main.temp_max);
                        $("#date").html("<h4>Your Locale Hour : </h4>" + date);
                        city = "";
                        $("hr").css("visibility","visible");
                        $("#show").css("border","2px solid black");
                    }

                    //if city name doesn't true this catch block will be executed
                    catch(error) {
                        alert("Please check the city name!");
                        $("#show").hide();
                        $("hr").css("visibility","hidden");
                    }
                }
            });
        }
        else {
            alert("Field cannot be empty");
        }
    });
});