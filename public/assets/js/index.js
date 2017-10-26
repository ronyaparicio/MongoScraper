
$('document').ready(function() {
    //scrap when the page loads
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
    //save article on button click
    $("#savedArticles").on("click",function() {
        $('#content').empty();
        $.ajax({
            url: '/saved',
            method: 'GET'
        }).done(function(res) {
            console.log(res);
            $('#content').append(res);
        })
    })
    // add comments
    $(document).on('click', '.comment', function() {
        var id = $(this).attr("id");

        $.ajax({
            url: '/comment',
            method: 'GET'
        }).done (function(res) {

        })
    })
    //delete article
    $(document).on('click', '.delete', function() {
        var id = $(this).attr("id");

        $.ajax({
            url: '/comment',
            method: 'DELETE'
        }).done (function(res) {

        })
    })
});



 