var rf_width=window.innerWidth;var rf_logo=document.createElement("img");rf_logo.setAttribute('src','https://vrgirlsgame.online/GM/logo.png');rf_logo.setAttribute('id','redfoc_logo');rf_logo.setAttribute('style','position: absolute; bottom: 8px; left: 8px; opacity: .5;');document.body.appendChild(rf_logo);rf_logo.addEventListener('click',function(){window.open("https://vrgirlsgame.online",'_blank');});rf_logo.addEventListener('mouseover',function(){rf_logo.style.opacity='1';document.body.style.cursor='pointer';});rf_logo.addEventListener('mouseout',function(){rf_logo.style.opacity='.5';});if(rf_width<=540){rf_logo.style.width='50px';};dragElement(document.getElementById("redfoc_logo"));function dragElement(elmnt){var pos1=0,pos2=0,pos3=0,pos4=0;if(document.getElementById(elmnt.id)){document.getElementById(elmnt.id).onmousedown=dragMouseDown;}else{elmnt.onmousedown=dragMouseDown;}
function dragMouseDown(e){e=e||window.event;e.preventDefault();pos3=e.clientX;pos4=e.clientY;document.onmouseup=closeDragElement;document.onmousemove=elementDrag;}
function elementDrag(e){e=e||window.event;e.preventDefault();pos1=pos3-e.clientX;pos2=pos4-e.clientY;pos3=e.clientX;pos4=e.clientY;elmnt.style.top=(elmnt.offsetTop-pos2)+"px";elmnt.style.left=(elmnt.offsetLeft-pos1)+"px";}
function closeDragElement(){document.onmouseup=null;document.onmousemove=null;}}