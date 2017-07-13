$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                $('ol').append('<li>' + toAdd + '</li>');
                 $('input').val('');
            });
       
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).css("background-color","green");
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
    
      
      $('ol').sortable();  
      
    }
);