'use strict'


$(document).ready(function(e)
{
    if($("#logout0").length)
    {
        $("#logout0").on("click",function(){
            $.post("/logout",function(){
                console.log("clicked");
                window.location.replace("/");
            });
        });
        
        removeCpy("#sel1 option");
        removeCpy("#sel2 option");
        removeCpy("#sel3 option");
        removeCpy("#sel4 optiion");
        removeCpy("#sel5 option");
        
    }
    
});

function removeCpy(id)
{
    /*$(id).val(function(index,val){
       $(this).siblings("[value ='"+val+"']").remove(); 
    });*/
    
    var usedNames = {};
$(id).each(function () {
    if(usedNames[this.text]) {
        $(this).remove();
    } else {
        usedNames[this.text] = this.value;
    }
});
}
