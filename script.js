var menuicon = document.getElementById("menu-item");
var list = document.getElementById("list")
var menustatus;
menustatus = "closed";

menuicon.onclick = function() {
if(menustatus == "closed"){
menuicon.src = "image/remove.png";
list.style.display ="block";

	menustatus = "open";
	
   }else{
menuicon.src = "image/menu.png";
list.style.display ="none";
 menustatus = "closed";  
   
   if(window.pageYOffset > 0){

   leftarrow.style.display = "none";
   rightarrow.style.display = "none";
	  }
   }

}
 window.onscroll = function(){
	
menuicon.src = "image/menu.png";
list.style.display ="none";
 menustatus = "closed";   
 }
 
 
 
var leftarrow = document.getElementById("left");
var rightarrow = document.getElementById("right");
var slider = document.getElementById("maincontent");
var image = ["image/background.jpg","image/post2.jpg","image/post3.jpg"]
var i;
i = 0;

slider.style.backgroundImage ="url("+image[i]+")";



leftarrow.onclick = function(){
if(i>0);{

   }
}

slider.style.backgroundImage ="url("+image[i]+")";
 i = i - 1;
rightarrow.onclick = function(){
if(i>Number.length-1){

   }
 	
slider.style.backgroundImage ="url("+image[i+1]+")";
i = i + 1;
}

 