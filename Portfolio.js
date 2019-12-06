var contact=document.querySelector(".contact");
var modal=document.querySelector(".contactmodal");
var close=document.querySelector(".close");
var open=document.querySelector(".quote");
var wedoit=document.querySelector(".wedoit");
var video=document.querySelector(".video");

(function(){
   video.playbackRate=1.1;
})();
contact.onclick=function(){
	modal.style.display="block";
	
}


open.onclick=function(){
	modal.style.display="block";
	wedoit.style.display="inline";
}

close.onclick=function(){
	modal.style.display="none";
	wedoit.style.display="none";	
}
