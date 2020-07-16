/*Name this external file gallery.js*/

function upDate(previewPic){
       
  document.getElementById("image").style.backgroundImage = 'url('+ previewPic.src +')';
  document.getElementById("image").style.backgroundColor = "#000000";
  document.getElementById("image").innerHTML = previewPic.alt;

 }

 function unDo(){

  document.getElementById("image").style.backgroundImage = 'url(' + ')';
  document.getElementById("image").style.backgroundColor = "#8e68ff";
  document.getElementById("image").innerHTML = "Hover over an image below to display here";

     
 }









/* function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       
      
      var src = previewPic.getAttribute( "src" );
      var alt = previewPic.getAttribute( "alt" );
      document.getElementById('image').style.backgroundImage = "url('" + src + "')";
      document.getElementById('image').innerHTML = alt;
   }
   
     function unDo(X){
      X = document.getElementById('image');
      X.style.backgroundImage = "url('')";
       document.getElementById('image').innerHTML = "Hover over an image below to display here";
     
   } */