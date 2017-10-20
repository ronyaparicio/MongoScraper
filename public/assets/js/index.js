
$('document').ready(function() {
    $.ajax({
        url: "/scrape",
        method: "GET"
    }).done(function(response) {
        console.log(response)
        $('#content').append(response);
    })
    
    $('.save').on('click', function() {
        var title = $('.class')
        $.ajax({
            url: '/saved',
            method: "POST",
            
        }).done(function(res) {
            
            $("#content").append(res);
            console.log('save')
        })
    })
});



 