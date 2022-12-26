var endLoad;
var body = document.querySelector('body');
var serverLoad;
var serverLoadBack;
//Connects to online
function load(){
body.style.overflow = 'hidden';
serverLoad = document.createElement('h1');
serverLoadBack = document.createElement('div');
body.appendChild(serverLoadBack);
serverLoadBack.style.backgroundColor = '#777070';
serverLoadBack.style.width = '40%';
serverLoadBack.style.height = '25%';
serverLoadBack.style.textAlign = 'center';
serverLoadBack.style.position = 'absolute';
serverLoadBack.style.top = '37.5%';
serverLoadBack.style.left = '30%';
serverLoadBack.style.cursor = 'wait';
serverLoadBack.appendChild(serverLoad);
serverLoad.style.paddingTop = '12.5%';
serverLoad.style.paddingBottom = '12.5%';
serverLoad.style.cursor = 'wait';
let count = 1;
let loadVal = "Connecting.";
endLoad = setInterval(function(){
    serverLoad.innerText = loadVal;
    if (count < 3){
      count += 1;
    }else{
      count = 1;
    }
    switch(count){
      case 1:
        loadVal = "Connecting.";
        break;
      case 2:
        loadVal = "Connecting..";
        break;
      case 3:
        loadVal = "Connecting...";
        break;
    }
  }, 500);
  setTimeout(function(){
  var i = 0;
  if (i = 1){
  connected();
  }
  else{
    i += 1;
  }
}, 5000);
}
//Removes animation from connecting
function connected(){
  clearInterval(endLoad);
  body.removeChild(serverLoadBack);
}