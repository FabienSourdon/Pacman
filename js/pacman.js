let level = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
[0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let enemy = [
    {
        y:11,
        x:10,
        direction:4
    },
    {
        y:11,
        x:10,
        direction:4
    },
    {
        y:11,
        x:10,
        direction:4
    },
    {
        y:11,
        x:10,
        direction:4
    },
];

let character = {
    y : 2,
    x : 2,
    direction: 1
}



let score = 0;

refresh();

document.addEventListener('keydown',arrows);

function refresh()
{
    let continues = true;
    movePlayer();
    for(var i in enemy){
        if(detectCol(i)){
            continues = false;
        };
    }
    for(var i in enemy){
        moveEnemy(i);
    }
    for(var i in enemy){
        if(detectCol(i)){
            continues = false;
        };
    }
    start();
    player();

    for(var i in enemy){
        ghost(i);
    }
    
    if(win()){
        continues = false;
    };

    if (continues){
        setTimeout(refresh, 500);
    };
    
}

function start()
{
    let elemUp = document.getElementById('contDiv');
    elemUp.innerHTML = " ";

    for(var i in level){
        for (var j in level[i]){
            
            let maDivIn = document.createElement('div');

            if (level[i][j] === 0){
                maDivIn.className = 'mur';
                maDivIn.style.gridColumn = parseInt(j)+1;
                maDivIn.style.gridRow = parseInt(i)+1;
            }
            else if (level[i][j] === 1){
                maDivIn.className = 'sol';
                maDivIn.style.gridColumn = parseInt(j)+1;
                maDivIn.style.gridRow = parseInt(i)+1;
            }
            else if (level[i][j] === 2){
                maDivIn.className = 'gum';
                maDivIn.style.gridColumn = parseInt(j)+1;
                maDivIn.style.gridRow = parseInt(i)+1;
            }   
            elemUp.appendChild(maDivIn);
        }
    }
}

function player(){
    let elemUp = document.getElementById('contDiv');
    let player = document.createElement('div');
    player.className = 'player';
    player.style.gridColumn = character.x;
    player.style.gridRow = character.y;
    elemUp.appendChild(player);
}

function ghost(e){
    let elemUp = document.getElementById('contDiv');
    let ghost = document.createElement('div');
    ghost.className = 'ghost' + e;
    ghost.style.gridColumn = enemy[e].x;
    ghost.style.gridRow = enemy[e].y;
    elemUp.appendChild(ghost);
}

function movePlayer(){
    if(character.x > level[0].length){
        character.x = 0;
    }
    else if(character.x < 0){
        character.x = 20;
    }

    if (character.direction === 1){
        character.x++;
        if(level[character.y-1][character.x-1] === 0){
            character.x--;
            }
    }
    else if(character.direction === 2){
        character.y++;
        if(level[character.y-1][character.x-1] === 0){
            character.y--;
        }
    }
    else if(character.direction === 3){
        character.x--;
        if(level[character.y-1][character.x-1] === 0){
            character.x++;
        }
    }
    else if(character.direction === 4){
        character.y--;
        if(level[character.y-1][character.x-1] === 0){
            character.y++;
        }
    }

    if(level[character.y-1][character.x-1] === 2){
        level[character.y-1][character.x-1] = 1;
        score++;
        document.getElementById('score').innerHTML = 'score : ' + score;
    }
}

function moveEnemy(e){
    
    enemy[e].direction = ranEnemy(1, 5);

    if(enemy[e].x > level[0].length){
        enemy.x = 0;
    }
    else if(enemy[e].x < 0){
        enemy[e].x = 20;
    }

    if(enemy[e].direction === 4){
        enemy[e].y--;
        if(level[enemy[e].y-1][enemy[e].x-1] === 0){
            enemy[e].y++;
        }
    }
    else if(enemy[e].direction === 3){
        enemy[e].x--;
        if(level[enemy[e].y-1][enemy[e].x-1] === 0){
            enemy[e].x++;
        }
    }
    else if(enemy[e].direction === 2){
        enemy[e].y++;
        if(level[enemy[e].y-1][enemy[e].x-1] === 0){
            enemy[e].y--;
        }
    }
    else if(enemy[e].direction === 1){
        enemy[e].x++;
        if(level[enemy[e].y-1][enemy[e].x-1] === 0){
            enemy[e].x--;
        }
    }
}

function arrows(e){
    
    if(e.key === 'z'){
        character.direction = 4;
    }
    else if(e.key === 'q'){
        character.direction = 3;
    }
    else if(e.key === 's'){
        character.direction = 2;
    }
    else if(e.key === 'd'){
        character.direction = 1;
    }
}

function ranEnemy(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function detectCol(e){
    
    if(character.x === enemy[e].x && character.y === enemy[e].y){
        console.log('P:',character.x, character.y,'E:', enemy[e].x, enemy[e].y);
        alert('Perdu !');
        return true;
    }
    return false;
}

function win(){
    let compteur = 0;
    for(var i in level){
        for(var j in level[i]){
            if(level[i][j] === 2){
                compteur++;
            }
        }
    }
    console.log(compteur);
    if(compteur == 0){
        alert('Gagné!');
        return true;
    }
    return false;
    
}