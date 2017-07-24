let gameMap = [
  [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1],
    [3,3,3,3,3,1,0,1,1,1,1,1,3,1,1,3,1,1,1,1,1,0,1,3,3,3,3,3],
    [3,3,3,3,3,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,3,3,3,3,3],
    [3,3,3,3,3,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,3,3,3,3,3],
    [1,1,1,1,1,1,0,1,1,3,3,1,1,3,3,1,1,3,3,1,1,0,1,1,1,1,1,1],
    [3,3,3,3,3,3,0,3,3,3,3,1,3,4,3,3,1,3,3,3,3,0,3,3,3,3,3,3],
    [1,1,1,1,1,1,0,1,1,3,3,1,1,1,1,1,1,3,3,1,1,0,1,1,1,1,1,1],
    [3,3,3,3,3,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,3,3,3,3,3],
    [3,3,3,3,3,1,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,0,1,3,3,3,3,3],
    [3,3,3,3,3,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,3,3,3,3,3],
    [1,1,1,1,1,1,0,1,1,3,1,1,1,1,1,1,1,1,3,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,1,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ],
  ['level 2']
];

let level = 0;

let position = {
  x:13,
  y:22
};

let purpleGhost= {
  x:4,
  y:22
}

let gameMapCopy = clone(gameMap[0]);  //update to clone(gameMap[level]) when more levels

let score = 0;

function createGrid (map){
  let worldBuilder = '';
  for(i=0; i<gameMapCopy.length; i++){
     worldBuilder +="<div class='container'>";
    for(j=0; j<gameMapCopy[i].length; j++){
      if(gameMapCopy[i][j] === 1){
        worldBuilder +="<div class='wall'></div>";
      } else if(gameMapCopy[i][j] === 0){
        worldBuilder +="<div class='coin'></div>";
      } else if(gameMapCopy[i][j] === 2){
        worldBuilder +="<div class='pacman'></div>";       
      } else if(gameMapCopy[i][j] === 3){
        worldBuilder +="<div class='blank'></div>";
      } else if(gameMapCopy[i][j] === 4){
        worldBuilder +="<div class='ghost'></div>";
      } 
    }
    worldBuilder +="</div>";
  }
  document.getElementById('world').innerHTML = worldBuilder;
  document.getElementById('score').innerHtml = score;
  document.getElementById('level').innerHTML = level+1;
  if (score === 24100 * (level+1)){
//    setTimeout(function() {             allows the user to pick up the last coin, but causes problems 
//                                        if a key is held down(vs pressed) as win happens
      console.log("241000= " + 24100 * (level+1))
      console.log("level= " + (level+1))
      win();
//    }, 100);
  }
}
createGrid(gameMapCopy);

document.onkeydown = function movePacman (keypress){
  if(keypress.keyCode === 38 && gameMapCopy[position.y-1][position.x] != 1) {
    if (gameMapCopy[position.y-1][position.x] === 0){
      updateScore();
    } else if (gameMapCopy[position.y-1][position.x] === 4){
      lose();
      return false;
    }
    gameMapCopy[position.y-1][position.x] = 2;
    gameMapCopy[position.y][position.x] = 3;
    position.y = position.y - 1;
  } else if(keypress.keyCode === 39 && gameMapCopy[position.y][position.x+1] != 1) {
    if (gameMapCopy[position.y][position.x+1] === 0){
      updateScore();
    } else if (gameMapCopy[position.y][position.x+1] === 4){
      lose();
      return false;
    }
    if (gameMapCopy[position.y][position.x+1] === undefined){
      gameMapCopy[position.y][position.x-27] = 2;
      gameMapCopy[position.y][position.x] = 3;
      position.x = position.x - 27;
    } else {
      gameMapCopy[position.y][position.x+1] = 2;
      gameMapCopy[position.y][position.x] = 3;
      position.x = position.x + 1;      
    }
  } else if(keypress.keyCode === 40 && gameMapCopy[position.y+1][position.x] != 1) {
    if (gameMapCopy[position.y+1][position.x] === 0){
      updateScore();
    } else if (gameMapCopy[position.y+1][position.x] === 4){
      lose();
      return false;
    } 
    gameMapCopy[position.y+1][position.x] = 2;
    gameMapCopy[position.y][position.x] = 3;
    position.y = position.y + 1;
  } else if(keypress.keyCode === 37 && gameMapCopy[position.y][position.x-1] != 1) {
    if (gameMapCopy[position.y][position.x-1] === 0){
      updateScore();
    } else if (gameMapCopy[position.y][position.x-1] === 4){
      lose();
      return false;
    }        
    if (gameMapCopy[position.y][position.x-1] === undefined){
      gameMapCopy[position.y][position.x+27] = 2;
      gameMapCopy[position.y][position.x] = 3;
      position.x = position.x + 27;
    } else {
      gameMapCopy[position.y][position.x-1] = 2;
      gameMapCopy[position.y][position.x] = 3;
      position.x = position.x - 1;      
    }
  }
  createGrid();
}

function updateScore (){
  score = score + 100;
  document.getElementById('score').innerHTML = score;
}

function win () {
  level++
  alert("You beat level " + level)
  position.x = 13;
  position.y = 22;
  gameMapCopy = clone(gameMap[0]);  //update to clone(gameMap[level]) when more levels
  createGrid(gameMapCopy);
}


function lose (){
  alert("Game Over" + "\n" + "Your final score is " + score);
  position.x = 13;
  position.y = 22;
  score = -100;
  level = 0;
  updateScore();
  document.getElementById('world').innerHTML = "";
  gameMapCopy = clone(gameMap[0]);  //update to clone(gameMap[level]) when more levels
  createGrid(gameMapCopy);
}

function rotatePacman (position){
  switch (position) {
    case "top":
      break;      
  }
}



//stackoverflow
function clone (existingArray) {
   var newObj = (existingArray instanceof Array) ? [] : {};
   for (i in existingArray) {
      if (i == 'clone') continue;
      if (existingArray[i] && typeof existingArray[i] == "object") {
         newObj[i] = clone(existingArray[i]);
      } else {
         newObj[i] = existingArray[i]
      }
   }
   return newObj;
}


