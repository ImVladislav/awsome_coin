$( document ).ready(function() {
   
    
  $( ".startagain, .startagain2" ).click(function(event) {

      event.preventDefault();

      $( ".thevibe" ).addClass( "active" );
      $( ".cto" ).removeClass( "active" );
      $( ".startagain2" ).addClass( "off" );
      $('#manipulate').get(0).play();
      
    });

    $( ".pimpit" ).click(function(event) {

      event.preventDefault();

      $( ".infomodal, .overlay" ).addClass( "active" );
      
    });

    $( ".close2, .overlay" ).click(function(event) {

      event.preventDefault();

      $( ".infomodal, .overlay" ).removeClass( "active" );
      
    });



    $( ".close" ).click(function(event) {

      event.preventDefault();

      $( ".thevibe" ).removeClass( "active" );
      $( ".cto" ).addClass( "active" );
      $( ".startagain2" ).removeClass( "off" );

      $('#manipulate').get(0).pause();
    });


});


/* SAVE THE HEADERS */


$(document).ready(function (){

  var width = $("body").width();

  if (width > 1024) {
  


  $('#header1').click(function(){
var link = document.createElement('a');
        link.href = '/images/headers/twitter-header-1.png';  // use realtive url 
        link.download = 'usdt-header.png';
        document.body.appendChild(link);
        link.click();     
 });
 $('#header2').click(function(){
  var link = document.createElement('a');
          link.href = '/images/headers/twitter-header-2.png';  // use realtive url 
          link.download = 'usdt-header.png';
          document.body.appendChild(link);
          link.click();     
   });

   $('#header3').click(function(){
    var link = document.createElement('a');
            link.href = '/images/headers/twitter-header-3.png';  // use realtive url 
            link.download = 'usdt-header.png';
            document.body.appendChild(link);
            link.click();     
     });

     $('#header4').click(function(){
      var link = document.createElement('a');
              link.href = '/images/headers/twitter-header-4.png';  // use realtive url 
              link.download = 'usdt-header.png';
              document.body.appendChild(link);
              link.click();     
       });

    $('#header5').click(function(){
        var link = document.createElement('a');
                link.href = '/images/headers/twitter-header-5.png';  // use realtive url 
                link.download = 'usdt-header.png';
                document.body.appendChild(link);
                link.click();     
         });
    $('#header6').click(function(){
          var link = document.createElement('a');
                  link.href = '/images/headers/twitter-header-6.png';  // use realtive url 
                  link.download = 'usdt-header.png';
                  document.body.appendChild(link);
                  link.click();     
           });
    
    $('#header7').click(function(){
            var link = document.createElement('a');
                    link.href = '/images/headers/twitter-header-7.png';  // use realtive url 
                    link.download = 'usdt-header.png';
                    document.body.appendChild(link);
                    link.click();     
             });
    
             $('#header8').click(function(){
              var link = document.createElement('a');
                      link.href = '/images/headers/twitter-header-8.png';  // use realtive url 
                      link.download = 'usdt-header.png';
                      document.body.appendChild(link);
                      link.click();     
               });

               $('#header9').click(function(){
                var link = document.createElement('a');
                        link.href = '/images/headers/twitter-header-9.png';  // use realtive url 
                        link.download = 'usdt-header.png';
                        document.body.appendChild(link);
                        link.click();     
                 });

          }
})