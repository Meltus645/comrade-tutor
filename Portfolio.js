var contact=document.querySelector(".contact");
var modal=document.querySelector(".contactmodal");
var close=document.querySelector(".close");
var open=document.querySelector(".quote");
var video=document.querySelector(".video");

(function(){
   video.playbackRate=1.1;
})();
contact.onclick=function(){
	modal.style.display="block";
}


open.onclick=function(){
	modal.style.display="block";
}

close.onclick=function(){
	modal.style.display="none";
	document.body.style.opacity = 1;
}
