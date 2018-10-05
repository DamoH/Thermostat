$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temp').text(thermostat.temperature);
    $('#saver').text(thermostat.mode);

    $("#powersave").click(function(){
        // e.preventDefault();
        thermostat.powersave();
        $("p").text(thermostat.mode);      
    });

    $('#up').submit(function(e) { 
        e.preventDefault();  
        $('#temp').text(thermostat.up($('#upButt').val()));
        // $('#upButt').text("sgsdg");
    });

    $('#down').submit(function(e) { 
        e.preventDefault();  
        $('#temp').text(thermostat.down($('#downButt').val()));
    });

    $("#reset").click(function(){
        // e.preventDefault();
        thermostat.reset();
        $("#temp").text(thermostat.temperature);      
    });

});   
