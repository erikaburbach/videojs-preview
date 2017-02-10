var elements = document.getElementsByClassName("vjs-loading-spinner");

if(elements.length>0){

  var currentDiv=elements[0].nextSibling;
  for (i=0;i<elements.length;i++){
    currentDiv.style.display="none";
    currentDiv=currentDiv.nextSibling;
  }
}
