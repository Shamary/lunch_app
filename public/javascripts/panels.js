'use strict'

$(document).ready(function(e)
{
    if($(".card-header").length)
    {
        $(".card-header").on('click',function(e)
        {
           $(this).next().toggle("slow");
           $('.body_ref:visible').not($(this).next()).toggle("slow");
        });
    }
});
