// $(document).ready(function(){
//     var thermostat = new Thermostat();
// })

$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temp').text(thermostat.temperature);
 

    $("#powersave").click(function(){
        $("p").text(thermostat.mode);

    });

    var input = $( "input:first" ).val();
    $('#up').submit(function(event){
        $('#temp').text(thermostat.up(input));
    });
});   
