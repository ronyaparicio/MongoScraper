
$('document').ready(function() {
    $.ajax({
        url: "/scrape",
        method: "GET"
    }).done(function(response) {
        $('#content').append(response);
    })
    
    $(document).on('click', '.save', function() {
        var title = $(this).attr("title");
        var link = $(this).attr("link");
        $.ajax({
            url: '/',
            method: "POST",
            dataType: "json",
            data: {
                title: title,
                link: link
            }
        }).done(function(res) {
            
        })
    })
});



 