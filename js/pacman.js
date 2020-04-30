class gridLoader{
    lvl;
    
    constructor(){
        this.lvl = [
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
            ]
    }

    start(){
    let elemUp = document.getElementById('contDiv');
    elemUp.innerHTML = " ";

    for(var i in this.lvl){
        for (var j in this.lvl[i]){
            
            let maDivIn = document.createElement('div');

            if (this.lvl[i][j] == 0){
                maDivIn.className = 'mur';
                maDivIn.style.gridColumn = parseInt(j)+1;
                maDivIn.style.gridRow = parseInt(i)+1;
            }
            else if (this.lvl[i][j] == 1){
                maDivIn.className = 'sol';
                maDivIn.style.gridColumn = parseInt(j)+1;
                maDivIn.style.gridRow = parseInt(i)+1;
            }
            else if (this.lvl[i][j] == 2){
                maDivIn.className = 'gum';
                maDivIn.style.gridColumn = parseInt(j)+1;
                maDivIn.style.gridRow = parseInt(i)+1;
            }   
            elemUp.appendChild(maDivIn);
        }
    }
}
}

let level = new gridLoader()
console.log(level);

class enemyLoader{
    y;
    x;
    direction;

    constructor(e,f,g){
        this.y = e;
        this.x = f;
        this.direction = g;
    }

    ghost(e){
        let elemUp = document.getElementById('contDiv');
        let ghost = document.createElement('div');
        ghost.className = 'ghost' + e;
        ghost.style.gridColumn = this.x;
        ghost.style.gridRow = this.y;
        elemUp.appendChild(ghost);
    }

    ranEnemy(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    moveEnemy(e){
    
        this.direction = this.ranEnemy(1, 5);
        console.log(this.direction);
    
        if(this.x > level.lvl[0].length){
            this.x = 1;
        }
        else if(this.x < 1){
            this.x = 19;
        }
    
        if(this.direction === 4){
            this.y--;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.y++;
            }
        }
        else if(this.direction === 3){
            this.x--;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.x++;
            }
        }
        else if(this.direction === 2){
            this.y++;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.y--;
            }
        }
        else if(this.direction === 1){
            this.x++;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.x--;
            }
        }
    }
}

let enemy = [
    new enemyLoader(11,10,4),
    new enemyLoader(11,10,4),
    new enemyLoader(11,10,4),
    new enemyLoader(11,10,4)
]

console.log(enemy);

class charLoader{
    y;
    x;
    direction;

    constructor(e, f, g){
        this.y = e;
        this.x = f;
        this.direction = g;
    }

    player(){
        let elemUp = document.getElementById('contDiv');
        let player = document.createElement('div');
        player.className = 'player';
        player.style.gridColumn = this.x;
        player.style.gridRow = this.y;
        elemUp.appendChild(player);
    }

    movePlayer(level){
        if(this.x > level.lvl[0].length){
            this.x = 0;
        }
        else if(this.x < 0){
            this.x = 20;
        }
    
        if (this.direction === 1){
            this.x++;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.x--;
                }
        }
        else if(this.direction === 2){
            this.y++;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.y--;
            }
        }
        else if(this.direction === 3){
            this.x--;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.x++;
            }
        }
        else if(this.direction === 4){
            this.y--;
            if(level.lvl[this.y-1][this.x-1] === 0){
                this.y++;
            }
        }
    
        if(level.lvl[this.y-1][this.x-1] === 2){
            level.lvl[this.y-1][this.x-1] = 1;
            score++;
            document.getElementById('score').innerHTML = 'score : ' + score;
        }
    }
}

let character = new charLoader(2,2,1);

let score = 0;

refresh();

document.addEventListener('keydown',arrows);

function refresh()
{
    let continues = true;
    character.movePlayer(level);
    for(var i in enemy){
        if(detectCol(i)){
            continues = false;
        };
    }
    for(var i in enemy){
        enemy[i].moveEnemy(i);
    }
    for(var i in enemy){
        if(detectCol(i)){
            continues = false;
        };
    }
    level.start();
    character.player();

    for(var i in enemy){
        enemy[i].ghost(i);
    }
    
    if(win()){
        continues = false;
    };

    if (continues){
        setTimeout(refresh, 500);
    };
    
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
    for(var i in level.lvl){
        for(var j in level.lvl[i]){
            if(level.lvl[i][j] === 2){
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