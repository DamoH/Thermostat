$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temp').text(thermostat.temperature);
 

    $("#powersave").click(function(){
        $("p").text(thermostat.mode);

    });

    $('#up').submit(function(e) {
    
        e.preventDefault();
        
        $('#temp').text(thermostat.up($('#butt').val()));
    });
});   
