'use strict'

window.onload=function()
{
    
$(document).ready(function(e){
    if($("#menu_table").length)
    {
        var menu= $("#menu_table").DataTable({
            "ordering":false,
            dom:"Bfrtip",
            buttons:[{extend:"excelHtml5", text:"Save as Excel", className:"sp_buttons"}, {extend:"pdf", text:"Save as PDF", className:"sp_buttons"}],
            ajax:{
                url:"/admin/populate",
                type: "POST",
                dataSrc:''
            },
            "columnDefs":[
                {
                    "targets":[0],
                    "visible":false,
                    "searchable":false
                }
            
            ]
            ,
            columns:[
                {data:'id'},
                {data:'appetizer'},
                {data:'protein'},
                {data:'carb'},
                {data:'vegetable'},
                {data:'sides'},
                {
                    data:null,
                    render:function(o){
                        return '<div><span class="del_button">&#10060;</span></div>'
                    }
                }
            ]
        });
        
        
     $('#menu_table').on('click',function(e)
        {
            if($(e.target).hasClass("del_button"))
            {
                let row=menu.row($(e.target).closest("tr")).data();//$(e.target).siblings(":last").val();
                console.log("id ="+row.id);
                
                $.post("/admin/delete",row,function(data){
                   menu.ajax.reload(); 
                });
            }
            //console.log("clicked "+e.target);
        });
    }
    
        
        if($("#orders_table").length)
        {
            var order= $("#orders_table").DataTable({
                "ordering":false,
                dom:"Bfrtip",
                buttons:[{extend:"excelHtml5", text:"Save as Excel", className:"sp_buttons"}, {extend:"pdf", text:"Save as PDF", className:"sp_buttons"}],
                ajax:{
                    url:"/admin/orders",
                    type: "POST",
                    dataSrc:''
                },
                columns:[
                    {data:'name'},
                    {data:"branch"},
                    {data:'appetizer'},
                    {data:'protein'},
                    {data:'carb'},
                    {data:'vegetable'},
                    {data:'sides'},
                ]
            });
            
            $("#signout").on("click",function(){
               $.post("/signout",function(){
                   window.location.replace("/signin");
               }); 
            });
        }
});

}