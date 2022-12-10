// création de mes variables
var dialogue = document.getElementById('boiteDeDialogue');


var img_heros1 = document.getElementById('hero1');
var img_heros2 = document.getElementById('hero2');
var img_heros3 = document.getElementById('hero3');
var img_heros4 = document.getElementById('hero4');

var img_ennemi1 = document.getElementById('ennemi1');
var img_ennemi2 = document.getElementById('ennemi2');
var img_ennemi3 = document.getElementById('ennemi3');

var hpHero1html = document.getElementById('hpHero1');
var hpHero2html = document.getElementById('hpHero2');
var hpHero3html = document.getElementById('hpHero3');
var hpHero4html = document.getElementById('hpHero4');
var hpHero1 = "100";
var hpHero2 = "100";
var hpHero3 = "100";
var hpHero4 = "100";

var hpEnnemi1html = document.getElementById('hpEnnemi1');
var hpEnnemi2html = document.getElementById('hpEnnemi2');
var hpEnnemi3html = document.getElementById('hpEnnemi3');
var hpEnnemi1 = "100";
var hpEnnemi2 = "100";
var hpEnnemi3 = "100";


var attack = document.getElementById('attack');
var defence = document.getElementById('defence');
var special = document.getElementById('special');


var j1joue = false;
var j2joue = false;
var j3joue = false;
var j4joue = false;

var j1defendu = false;
var j2defendu = false;
var j3defendu = false;
var j4defendu = false;

var j1atk = false;
var j1def = false;
var j1spe = false;
var j2atk = false;
var j2def = false;
var j2spe = false;
var j3atk = false;
var j3def = false;
var j3spe = false;
var j4atk = false;
var j4def = false;
var j4spe = false;

var j1enVie = true;
var j2enVie = true;
var j3enVie = true;
var j4enVie = true;
var enn1enVie = true;
var enn2enVie = true;
var enn3enVie = true;

var nbEnnemis = 3; // nombre d'ennemis encore en vie

var gameover = false;




// fonction simulant le tour de jeu de chaque heros
function tourDeJeu() {

    // tant que les 4 joueurs n'ont pas jouer et que le jeu n'est pas fini
    while (!j1joue && !j2joue && !j3joue && !j4joue && !gameover) {


        // tour du heros 1 s'il est en vie
        if (j1enVie) {
            dialogue.innerHTML = "Choissisez action du hero 1";

            // si le bouton attack est cliquer
            if (attack.onclick && !j1atk) {
                attackHero();
    
                j1atk = true;
                j1def = false;
                j1spe = false;
    
                attack.onclick = null;
    
            // si le bouton defence est cliquer
            } else if (defence.onclick && !j1def) {
                defenceHero(1);
    
                j1def= true;
                j1atk = false;
                j1spe = false
    
                defence.onclick = false;
                
            // si le bouton special est cliquer
            } else if (special.onclick && !j1spe) {
                specialHero(1);
    
                j1spe = true;
                j1atk = false;
                j1def = false;
    
                special.onclick = null;
            }

            // on verifie si des ennemis sont morts avant le tour du hero suivant
            ennemisEnVie();

            // on enregistre que le hero a deja jouer
            j1joue = true;
        }
       

        // tour du heros 2 s'il est en vie
        if (j2enVie) {
            dialogue.innerHTML = "Choissisez action du hero 2";

            if (attack.onclick && !j2atk) {
                attackHero();
    
                j2atk = true;
                j2def = false;
                j2spe = false;
    
                attack.onclick = null;
    
            } else if (defence.onclick && !j2def) {
                defenceHero(2);
    
                j2def = true;
                j2atk = false;
                j2spe = false;
    
                defence.onclick = null;
    
            } else if (special.onclick && !j2spe) {
                specialHero(2);
    
                j2spe = true;
                j2atk = false;
                j2def = false;
    
                special.onclick = null;
            }
            ennemisEnVie();
            j2joue = true;
        }
    

        // tour du heros 3 s'il est en vie
        if (j3enVie) {
            dialogue.innerHTML = "Choissisez action du hero 3";

            if (attack.onclick && !j3atk) {
                attackHero();
    
                j3atk = true;
                j3def = false;
                j3spe = false;
    
                attack.onclick = null;
    
            } else if (defence.onclick && !j3def) {
                defenceHero(3);
    
                j3def = true;
                j3atk = false;
                j3spe = false;
    
                defence.onclick = null;
    
            } else if (special.onclick && !j3spe) {
                specialHero(3);
    
                j3spe = true;
                j3atk = false;
                j3def = false;
    
                special.onclick = null;
            }
            ennemisEnVie();
            j3joue = true;
        }
        

        // tour du heros 4 s'il est en vie
        if (j4enVie) {
            dialogue.innerHTML = "Choissisez action du hero 4";

            if (attack.onclick && !j4atk) {
                attackHero();
    
                j4atk = true;
                j4def = false;
                j4spe = false;
    
                attack.onclick = null;
    
            } else if (defence.onclick && !j4def) {
                defenceHero(4);
    
                j4def = true;
                j4atk = false;
                j4spe = false;
    
                defence.onclick = null;
    
            } else if (special.onclick && !j4spe) {
                specialHero(4);
    
                j4spe = true;
                j4atk = false;
                j4def = false;
    
                special.onclick = false;
            }
            ennemisEnVie();
            j4joue = true;
        }        
    }
    
    // a la fin du tour de chaque hero, les ennemis ripostent
    riposteEnnemis();
}


// fonction permettant au heros d'utiliser l'attaque de base
function attackHero() {
    dialogue.innerHTML = "le heros attaque une cible au hasard";

    // nombre aleatoire entre 1 et 3
    var random = Math.floor(Math.random()*2)+1;

    // degats entre 0 et 25
    var degats = Math.floor(Math.random()*25);

    if (random == 1) {
        hpEnnemi1html.innerHTML = hpEnnemi1 -= degats;
        dialogue.innerHTML = "L'ennemi 1 prend " + degats + " degats"

    } else if (random == 2) {
        hpEnnemi2html.innerHTML = hpEnnemi2 -= degats;
        dialogue.innerHTML = "L'ennemi 2 prend " + degats + " degats"

    } else if (random == 3) {
        hpEnnemi3html.innerHTML = hpEnnemi3 -= degats;
        dialogue.innerHTML = "L'ennemi 3 prend " + degats + " degats"
    }
}


// fonction permettant au hero passer en parametre de se defendre
function defenceHero(hero) {
    dialogue.innerHTML = "le hero se defend, il ne perdra pas de hp au prochain tour";

    if (hero == 1) {
        j1defendu = true;
    } else if (hero == 2) {
        j2defendu = true;
    } else if (hero == 3) {
        j3defendu = true;
    } else if (hero == 4) {
        j4defendu = true;
    }
}


// fonction permettant au hero passer en parametre d'utiliser son attaque speciale
// a rajouter : mana
function specialHero(hero) {

    dialogue.innerHTML = "le heros lance son attaque spaciale sur une cible au hasard";

    // nombre aleatoire entre 1 et 3
    var random = Math.floor(Math.random()*2)+1;

    // degats entre 10 et 50
    var degats = Math.floor(Math.random()*40+10);

    // dialogue d'attaque en fonction du hero qui fait l'attaque
    if (hero == 1) {
        dialogue.innerHTML = "Le hero 1 fait un uppercut !";
    } else if (hero == 2) {
        dialogue.innerHTML = "Le hero 2 fait un coup bas !";
    } else if (hero == 3) {
        dialogue.innerHTML = "Le hero 3 fait un coup d'estoc !";
    } else if (hero == 4) {
        dialogue.innerHTML = "Le hero 4 fait un coup de boule !";
    }

    if (random == 1) {
        hpEnnemi1html.innerHTML = hpEnnemi1 -= degats;
        dialogue.innerHTML = "L'ennemi 1 prend " + degats + " degats"

    } else if (random == 2) {
        hpEnnemi2html.innerHTML = hpEnnemi2 -= degats;
        dialogue.innerHTML = "L'ennemi 2 prend " + degats + " degats"

    } else if (random == 3) {
        hpEnnemi3html.innerHTML = hpEnnemi3 -= degats;
        dialogue.innerHTML = "L'ennemi 3 prend " + degats + " degats"
    }
}


// fonction permettant la riposte des ennemis
function riposteEnnemis() {

    // si le jeu n'est pas fini on procede a la riposte des ennemis
    if (!gameover) {

        for (i=1; i<=nbEnnemis; i++) {
            // nombre aleatoire entre 1 et 4
            var random = Math.floor(Math.random()*3)+1;
    
            // degats entre 0 et 25
            var degats = Math.floor(Math.random()*25);
    
            if (random == 1) {
                // si le hero 1 a choisi de ne pas se defendre au dernier tour
                if (!j1defendu) {
                    // le hero tirer au hasard prend les degats
                    hpHero1html.innerHTML = hpHero1 -= degats;
                    dialogue.innerHTML = "l'ennemi " + i + " a fait " + degats + " au hero 1";

                // sinon, il ne prend pas de degat et n'est pas defendu pour le tour qui suit
                } else {
                    j1defendu = false;
                }
                
    
            } else if (random == 2) {
                if (!j2defendu) {
                    hpHero2html.innerHTML = hpHero2 -= degats;
                    dialogue.innerHTML = "l'ennemi " + i + " a fait " + degats + " au hero 2";
                } else {
                    j2defendu = false;
                }
                
    
            } else if (random == 3) {
                if (!j3defendu) {
                    hpHero3html.innerHTML = hpHero3 -= degats;
                    dialogue.innerHTML = "l'ennemi " + i + " a fait " + degats + " au hero 3";
                } else {
                    j3defendu = false;
                }
                
    
            } else if (random == 4) {
                if (!j4defendu) {
                    hpHero4html.innerHTML = hpHero4 -= degats;
                    dialogue.innerHTML = "l'ennemi " + i + " a fait " + degats + " au hero 4";
                } else {
                    j4defendu = false;
                }            
            }

            // on verifie si des heros sont morts avant le prochain tour de riposte
            herosEnVie();
        }
        // on procede a la suite du jeu avec les tours des heros
        tourDeJeu();
    }    
}


// fonction verifiant la vie des heros
function herosEnVie() {

    // on permet aux heros de jouer un nouveau tour s'ils sont en vie
    j1joue = false; j2joue = false; j3joue = false; j4joue = false;

    // si le hero 1 a 0 hp ou moins
    if (hpHero1 <= 0) {
        // le hero ne peut plus jouer
        j1enVie = false;
        j1joue = true;

        // on retire son image du jeu
        img_heros1.style.visibility = "hidden";
        dialogue.innerHTML = "Le heros 1 a ete vaincu";
    }

    if (hpHero2 <= 0) {
        j2enVie = false;
        j2joue = true;

        img_heros2.style.visibility = "hidden";
        dialogue.innerHTML = "Le heros 2 a ete vaincu";
    }

    if (hpHero3 <= 0) {
        j3enVie = false;
        j3joue = true;

        img_heros3.style.visibility = "hidden";
        dialogue.innerHTML = "Le heros 3 a ete vaincu";
    }

    if (hpHero4 <= 0) {
        j4enVie = false;
        j4joue = true;

        img_heros4.style.visibility = "hidden";
        dialogue.innerHTML = "Le heros 4 a ete vaincu";
    }

    // si tous les heros sont morts c'est game over
    if (!j1enVie && !j2enVie && !j3enVie && !j4enVie) {
        dialogue.innerHTML = "GAME OVER : tous les heros ont ete vaincus";

        gameover = true;
    }
}


// fonction verifiant la vie des ennemis
function ennemisEnVie() {

    // si l'ennemi 1 a 0 hp ou moins
    if (hpEnnemi1 <= 0) {
        enn1enVie = false;

        // on retire son image du jeu
        img_ennemi1.style.visibility = "hidden";
        dialogue.innerHTML = "L'ennemi 1 a ete vaincu";

        // le nombre d'ennemis encore en vie diminue de 1
        nbEnnemis--;
    }

    if (hpEnnemi2 <= 0) {
        enn2enVie = false;

        img_ennemi2.style.visibility = "hidden";
        dialogue.innerHTML = "L'ennemi 2 a ete vaincu";

        nbEnnemis--;
    }

    if (hpEnnemi3 <= 0) {
        enn3enVie = false;

        img_ennemi3.style.visibility = "hidden";
        dialogue.innerHTML = "L'ennemi 3 a ete vaincu";

        nbEnnemis--;
    }

    // si tous les ennemis sont morts c'est gagner !
    if (!enn1enVie && !enn2enVie && !enn3enVie) {
        dialogue.innerHTML = "GAME OVER : vous avez vaincu tous les ennemis";

        gameover = true;
    }
}