
$('document').ready(function() {
    $.ajax({
        url: "/scrape",
        method: "GET"
    }).done(function(response) {
        console.log(response)
        $('#content').append(response);
    })
    
    $(document).on('click', '.save', function() {
        var self = this;
        var title = $(this).attr("title");
        var link = $(this).attr("link");
        $.ajax({
            url: '/saved',
            method: "POST",
            data: {
                title: title,
                link: link
            }
        }).done(function(res) {
            console.log(res)
        })
    })
});



 