var elements = document.getElementsByClassName("vjs-loading-spinner");

if(elements){

  var currentDiv=elements[0].nextSibling;
  for (i=0;i<elements.length;i++){
    currentDiv.style.display="none";
    currentDiv=currentDiv.nextSibling;
  }
}
