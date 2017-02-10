var elements = document.getElementsByClassName("vjs-loading-spinner");

if(elements.length>0){

  var currentDiv=elements[0].nextSibling;
  for (i=0;i<elements.length;i++){
    currentDiv.style.display="none";
    currentDiv=currentDiv.nextSibling;
  }
}

var players=document.getElementsByClassName("video-js");
if (players.length>0){
  for (i=0;i<players.length;i++){
    if(!players[i].style.height){
    players[i].style.height="150px";
    players[i].style.width="300px";
    players[i].style.fontSize="14px";
    players[i].style.overflow="hidden";
  }
  }
}
