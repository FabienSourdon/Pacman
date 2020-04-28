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

let character = {
    y : 2,
    x : 2,
    direction: 1
}

let score = 0;

refresh();

function refresh()
{
    start();
    player();
    movePlayer();
// là on mets le code a afficher toutes les secondes
    setTimeout(refresh, 1000)
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

function movePlayer(){
    
    if (character.direction === 1){
        character.x++;
        if(level[character.y-1][character.x-1] === 0){
            character.x--;
        }
    }

    if(level[character.y-1][character.x-1] === 2){
        level[character.y-1][character.x-1] = 1;
        score++;
        document.getElementById('score').innerHTML = 'score :' + score;
    }
}

function arrows(){
    var player = document.getElementById('player');

}