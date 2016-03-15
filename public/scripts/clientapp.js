$(document).ready(function() {

    $('#submit-button').on('click', postData);


});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            console.log(data);
            appendDom(data);
        }
    });
}

function appendDom(object){
  for (var i = 0; i< object.length; i++){
    $(".info").append('<div class = newinfo></div>');
    var $el = $(".info").children().last();
    $el.append("<p>Name: "+object[i].name+"</p>");
    $el.append("<p>Address: "+object[i].address+"</p>");
    $el.append("<p>City: "+object[i].city+"</p>");
    $el.append("<p>State: "+object[i].state+"</p>");
    $el.append("<p>Zip Code: "+object[i].zip_code+"</p>");
  }

}
