$(document).ready(function(){
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
        $('#number-of-people').text(data['number'] + ' people are in space right now');
        var astronauts = data['people'];
        var astronautsList = '<h2>Who is in space?</h2>';
        astronauts.forEach(function(astronaut) {
            astronautsList += '<div class="astronaut">' + astronaut['name'] + ' on the ' + astronaut['craft'] + '</div>';
        });
        $('#astronauts-list').html(astronautsList);
    }).fail(function(){
        console.log("An error has occurred.");
        $('#number-of-people').text('Failed to load data.');
        $('#astronauts-list').text('');
    });
});